# Employees App
A web app that lets you find the two employees of a list of employees that have worked together for the longest on the same project.

## Starting the project
Simply run `npm start` in the console.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How to use
After you run the project you will see this page.
![image](https://user-images.githubusercontent.com/41078003/126895899-f3d23a42-bf2b-4867-b148-8dba17648d64.png)

Here you want to click on the "Upload employees file" button which will let you choose the file you want to use. Afterwards click on "Get Employee Pair" and you will get your results in the table below the buttons.
It should look something like this when you are done.
![image](https://user-images.githubusercontent.com/41078003/126895946-a57b6dbd-8438-44ae-9c50-21b8bf38d4a8.png)

## Additional info
- The app supports both files in .txt and in .csv
- The format in which the data should be in is "EmpID, ProjectID, DateFrom, DateTo", example: "143, 12, 2013-11-01, 2014-01-05"
