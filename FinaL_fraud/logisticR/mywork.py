# -*- coding: utf-8 -*-
"""mywork.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Rqs4r2ds61Gtg02zkhsm3d_Vqcn780XY

Importing the Dependencies
"""

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

!pip install -U -q PyDrive

from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from google.colab import auth
from oauth2client.client import GoogleCredentials
  
  
# Authenticate and create the PyDrive client.
auth.authenticate_user()
gauth = GoogleAuth()
gauth.credentials = GoogleCredentials.get_application_default()
drive = GoogleDrive(gauth)

# loading the dataset to a Pandas DataFrame
link =  'https://drive.google.com/file/d/1y2g5lIU9bLcDBoafJXD9ORKQoAm4hCqj/view?usp=sharing'

import pandas as pd

# to get the id part of the file
id = link.split("/")[-2]

downloaded = drive.CreateFile({'id':id})
downloaded.GetContentFile('primary_account(2).csv')

credit_card_data = pd.read_csv('primary_account(2).csv', sep = ',')

# first 5 rows of the dataset
credit_card_data.head()

credit_card_data.tail()

# dataset informations
credit_card_data.info()

# checking the number of missing values in each column
credit_card_data.isnull().sum()

# distribution of legit transactions & fraudulent transactions
credit_card_data['Class'].value_counts()

"""This Dataset is highly unblanced

0 --> Normal Transaction

1 --> fraudulent transaction
"""

# separating the data for analysis
legit = credit_card_data[credit_card_data.Class == 0]
fraud = credit_card_data[credit_card_data.Class == 1]

print(legit.shape)
print(fraud.shape)

# statistical measures of the data
legit.amount.describe()

fraud.amount.describe()

# compare the values for both transactions
credit_card_data.groupby('Class').mean()

"""Under-Sampling

Build a sample dataset containing similar distribution of normal transactions and Fraudulent Transactions

Number of Fraudulent Transactions --> 492
"""

legit_sample = legit.sample(n=492)

"""Concatenating two DataFrames"""

new_dataset = pd.concat([legit, fraud], axis=0)

new_dataset.head()

new_dataset.tail()

new_dataset['Class'].value_counts()

new_dataset.groupby('Class').mean()

"""Splitting the data into Features & Targets"""

X = new_dataset.drop(columns='Class', axis=1)
Y = new_dataset['Class']

print(X)

print(Y)

"""Split the data into Training data & Testing Data"""

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

print(X.shape, X_train.shape, X_test.shape)

"""Model Training

Logistic Regression
"""

model = LogisticRegression()

# training the Logistic Regression Model with Training Data
model.fit(X_train, Y_train)

"""Model Evaluation

Accuracy Score
"""

# accuracy on training data
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)

print('Accuracy on Training data : ', training_data_accuracy)

# accuracy on test data
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)

print('Accuracy score on Test Data : ', test_data_accuracy)

"""
continuit?? video 3
"""

y_pred = np.array(model.predict(X_test))
y = np.array(Y_test )

from sklearn.metrics import classification_report,accuracy_score, confusion_matrix

print(confusion_matrix(Y_test,y_pred))

print("Accuracy Score :")
    print(accuracy_score(Y_test,y_pred))
    print("Classification Report :")
    print(classification_report(Y_test,y_pred))