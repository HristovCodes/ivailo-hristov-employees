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
![image](https://user-images.githubusercontent.com/41078003/127861802-d1fcd6f9-c3ca-4ef8-9413-375f12ea3e8c.png)

Here you want to click on the "Upload employees file" button which will let you choose the file you want to use. Afterwards click on "Get Employee Pair" and you will get your results in the table below the buttons.
It should look something like this when you are done.
![image](https://user-images.githubusercontent.com/41078003/127861774-bd6b084d-8f8a-4c7f-853b-742a9f8e4e39.png)

## Additional info
- The app supports both files in .txt and in .csv
- The format in which the data should be in is "EmpID, ProjectID, DateFrom, DateTo", example: "143, 12, 2013-11-01, 2014-01-05"
