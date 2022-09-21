# **Circularity Accounting Model**

CO2 increase is a main contributor to climate change, but this vast impact is not well quantified in terms of individual human behaviors. 
We develop tools for training CO2 sequence models for the circularity accounting model project, which develops a CO2 estimator and a CO2 production-consumption chain predictor

Our goal is to organize data so that it can be trained into models of CO2 chains.

1] Who organizes the data?

2] What is the data?

3] What are the models?

4] What are the CO2 chains?


[3] **The model architectures**
The model architecture is based on front-stage image detectors and recognizers connected to production chain sequence models. this repository contains the sequence training tools.

## Building our data

1. Using the carbon data from the CCaLC database and create a graph for training the network modules by using the website graph tool: https://www.entropynetwork.com/circularity/app.html?jsonURL=&xres=2048&yres=2048&imageURL=

<img src="https://github.com/co2pi/circularity/blob/main/photo/Screen%20Shot%202022-09-11%20at%2014.04.19.png" alt="Alt text" title="Optional title">

2. Press the first line of vector, in here is ‘RawMaterials_a’ and press ‘findVector’. Copy the generated text it and past in a new txt file.
3. Use the website to convert the generated text to the computer-can-read sentence. http://www.entropynetwork.com/text/
   Past it in the first blank box and press ‘**load**’. 
	 Save the generated text in the third box.

<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture1.png" alt="Alt text" title="Optional title">

4. Do it again from the beginning using the carbon value.
The final txt file should be like：

RawMaterials_a Transport1 Prodcution_a Transport2 Storage_a Transport3 Use_a
RawMaterials_b Transport4
Production_b Transport5
Storage_b Transport6
Use_b Transport7

RawMaterials_a	0
Transport1	1
Prodcution_a	2
Transport2	3
Storage_a	4
Transport3	5
Use_a	6
RawMaterials_b	7
Transport4	8
Production_b	9
Transport5	10
Storage_b	11
Transport6	12
Use_b	13
Transport7	14

2105.17_a 5.89_a 597.15_a 9_a 0.00_a 9_b 620_a
2105.17_b 0.00_b
597.15_b 0.08_b
0.00_c 0.00_d
620_b 6.58_b

2105.17_a	0
5.89_a	1
597.15_a	2
9_a	3
0.00_a	4
9_b	5
620_a	6
2105.17_b	7
0.00_b	8
597.15_b	9
0.08_b	10
0.00_c	11
0.00_d	12
620_b	13
6.58_b	14

## Coding section

open the terminal in your laptop.
Type what inside of ‘’
‘**ssh username@xxxxxxxxxx**’（connect to the server)
Enter password: 

### 1. How to put your data in the program:

 ’**bash**‘ create a new shell
 
 ’**cd 2022s2s/seq2seq**’ change directory to the seq2seq direc.
 
 ‘**cd nmt_data**’
 
 ‘**cd CVM**’
 
 ‘**cd train**’
 
 ‘**ls**’ (list) show all files in this folder

<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture2.png" alt="Alt text" title="Optional title">


We can see we have four txt.file in the train folder. They correspond to the four data that we did earlier

’**nano xxxx(file’s name)**’ to edit the data. 

<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture3.png " alt="Alt text" title="Optional title">

Press: 	control + O
		Enter
		control + X
		Enter
		
Do it 4 times until all files(target.txt; sources.txt; vocab target.txt; vocab sources.txt) are filled with your data

### 2. How to adjust running step:

**‘cd ~’**

‘**cd 2022s2s/seq2seq**’

‘**nano CVM_train.sh**’

scroll down find the place where ’TRAIN_STEP = **XXXXX**’
Change the number to any running step you want
<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture4.png " alt="Alt text" title="Optional title">

If your running step is not large enough, your result may appear ‘UNK’
<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture5.png " alt="Alt text" title="Optional title">

### **3. How to train the model:**

**‘cd ~’** go back to main directory

‘**cd 2022s2s/seq2seq**’ re-enter the seq2seq directory

‘**source ~/clone/venv3/bin/activate**’ create an environment

‘**./CVM_train.sh**’ foreground running

‘**./CVM_background_train.sh**’ background running

### **4. How to run the model**

After train the model, continue type (which means we are in the same directory and environment):
‘**./CVM_1_postText.cgi**’
Press **enter**
**Copy the last line of the code run it.**
<img src="https://github.com/co2pi/circularity/blob/main/photo/Picture6.png " alt="Alt text" title="Optional title">
The result will post on the website. 

