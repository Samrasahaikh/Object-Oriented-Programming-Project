#! /usr/bin/env node
//Object Oriented programming project
import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name : string;
    constructor(name : string){
        this.name = name 
    };
};

class Person {
    students : Student[] = []
    addStudent(obj:Student){
        this.students.push(obj)
    };
};

const Persons = new Person()

const programStart = async (Persons : Person) => {
    do{
    console.log(chalk.yellow.bold.italic("\t\n<<<<<<<<<<<<<<<<<<<< Welcome To Object Oriented Programming Project!! >>>>>>>>>>>>>>>>>>>>\n\t"));
    const ans = await inquirer.prompt({
        name : "Select",
        type : "list",
        message : chalk.blue.bold("Whom Would You Like To Interact With?"),
        choices : ["Staff", "Student", "Exist"]
    });

    if (ans.Select == "Staff") {
        console.log(chalk.magenta("You Approach The Staff Room. Please Feel Free To Ask Any Question."));
    }
    else if (ans.Select == "Student") {
        const ans = await inquirer.prompt({
            name : "student",
            type : "input",
            message : chalk.blue.bold("Enter The Student's Name You Wish To Engage With")
        });
        const student = Persons.students.find(val => val.name == ans.student)
        if (!student) {
            const name = new Student(ans.student)
            Persons. addStudent(name)
            console.log(chalk.green(`Hello I Am ${name.name}. Nice To Meet You!`));
            console.log(chalk.yellow.bold.italic("\t New Student Added \t"));
            console.log(chalk.yellow.bold.italic("\t Current Student List \t\n"));
            console.log(Persons.students);
            
        } else {
            console.log(chalk.green(`Hello I Am ${student.name}. Nice To See You Again!!`));
            console.log(chalk.red("Existing Student List:"));
            console.log(Persons.students);
            
        }
    } else if (ans.Select == "Exist"){
        console.log(chalk.red.bold("Exiting The Program..."));
        process.exit()
    }
    } while(true)
};

programStart(Persons);