#!/bin/sh
echo "Content-type: text/html\n\n"


# 20201113 jesse
# CVM (NMT) Neural Machine Translation using seq2seq

# from
# https://google.github.io/seq2seq/nmt/

# what do the special tokens like UNK mean?
# from https://github.com/nicolas-ivanov/tf_seq2seq_chatbot/issues/15
# GO - the same as <start> on the picture below - the first token which is fed to the 
# decoder along with the though vector in order to start generating tokens of the answer
# EOS - "end of sentence" - the same as <end> on the picture below - as soon as decoder 
# generates this token we consider the answer to be complete (you can't use usual 
# punctuation marks for this purpose cause their meaning can be different)
# UNK - "unknown token" - is used to replace the rare words that did not fit in your 
# vocabulary. So your sentence My name is 98yiuhjn will be translated into My name is 
# _unk_.
# PAD - padding

#cd /home/cyrus/jesse/seq2seq/
#cd ~/Documents/DEV/s2s_project/seq2seq/
##? cd /home/cyrus/Documents/DEV/s2s_project/seq2seq
#for chron
source /etc/profile

# set tensorflow path
# this shellscript doesnt work for some reason. 
# ~/tensorflow_1_env.sh 
# so we set the ENV path for tensorflow as following
export LD_LIBRARY_PATH=/usr/local/cuda-10.0/lib64
export CUDADIR=/usr/local/cuda-10.0


# the model will be constructed with tensors the size of the vocabulary list,
# so if the vocabulary changes in size, any model checkpoints will be incompatible
# with a new vocabulary

export BASE=/org/dp
export S2SPROJ=${BASE}/s2s_project/seq2seq/

export VOCAB_SOURCE=${S2SPROJ}/nmt_data/CVM/train/vocab.sources.txt
export VOCAB_TARGET=${S2SPROJ}/nmt_data/CVM/train/vocab.targets.txt
export TRAIN_SOURCES=${S2SPROJ}/nmt_data/CVM/train/sources.txt
export TRAIN_TARGETS=${S2SPROJ}/nmt_data/CVM/train/targets.txt
export DEV_SOURCES=${S2SPROJ}/nmt_data/CVM/dev/sources.txt
export DEV_TARGETS=${S2SPROJ}/nmt_data/CVM/dev/targets.txt

export DEV_TARGETS_REF=${S2SPROJ}/nmt_data/CVM/dev/targets.txt
export TRAIN_STEPS=100000

# so far 99001


#export MODEL_DIR=${TMPDIR:-/tmp}/nmt_tutorial
#export MODEL_DIR=${TMPDIR:-/tmp}/CVM
#export MODEL_DIR=${BASE}/s2s_project/s2s_models/CVM
export MODEL_DIR=${BASE}/s2s_project/s2s_models/CVM

# enter into the python 'Venv' which has our python libs/tensorflow etc.
workon dfl



#get the new trans doc
wget http://www.entropynetwork.com//pub/s2s//CVM_00001_1.json -O CVM_trans.json
#convert JSON to text
#~/Documents/DEV/s2s_project/seq2seq$ python3 parseTransJSON.py 
python CVM_parseTrans_JSON.py
#python parseTransJSON.py
export DEV_SOURCES=${BASE}/s2s_project/seq2seq/trans.txt
export PRED_DIR=${BASE}/s2s_project/seq2seq/
#export PRED_DIR=${MODEL_DIR}/pred
mkdir -p ${PRED_DIR}

python -m bin.infer \
  --tasks "
    - class: DecodeText" \
  --model_dir $MODEL_DIR \
  --input_pipeline "
    class: ParallelTextInputPipeline
    params:
      source_files:
        - $DEV_SOURCES" \
  >  ${PRED_DIR}/CVM_predictions.txt


python3 postPredictions.py

echo "posted to server."
echo " "
echo " "
#more $DEV_SOURCES
#echo ">>"
#more ${PRED_DIR}/predictions.txt




