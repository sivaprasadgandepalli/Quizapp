const questions=[{
	Q:"1.which of the following is web Language:",
	op1:'HTML',
	op2:'python',
	op3:'java',
	op4:'English'},
	{Q:"2.What is CSS stands for:",
	op1:"cascading stylesheets",
	op2:"color stylesheets",
	op3:"css",
	op4:"None"},
	{Q:"3.How many ways we can apply style to html element:",
	op1:'1',
	op2:'2',
	op3:'3',
	op4:'4'},
	{Q:"4.Select block level element from following:",
	op1:"span tag",
	op2:"div tag",
	op3:"p tag",
	op4:"label tag"}]
var answer=[1,1,3,2];
var score=0;
var cq=0;
var qb1=document.getElementById('qbox');
var op=document.querySelectorAll('li');
var i=1;
var rst=document.getElementById('rest');
var radio=document.querySelectorAll('input');
var btn1=document.getElementById('btn');
var fc=document.getElementById('scr');
var scbd=document.getElementById('result');
var dsq=document.getElementById('ca');
var show=document.getElementById('showcase');
var radId=0;
function countScore(e){
	radId=e;
	if(answer[i-1]==(e+1))
	{
		score++;
		cq++;
	}
}
function display()
{
	qb1.innerHTML=questions[0].Q;
	op[0].innerHTML=questions[0].op1;
	op[1].innerHTML=questions[0].op2;
	op[2].innerHTML=questions[0].op3;
	op[3].innerHTML=questions[0].op4;
}
function next()
{
	if(i<4)
	{
		qb1.innerHTML=questions[i].Q;
		op[0].innerHTML=questions[i].op1;
		op[1].innerHTML=questions[i].op2;
		op[2].innerHTML=questions[i].op3;
		op[3].innerHTML=questions[i].op4;
		radio[radId].checked=false;
		i++;
	}
	else
	{
		radio[radId].checked=false;
		btn1.style.display="none";
		displayScore();
	}
}
function displayScore(){
	show.style.display="none";
	fc.innerHTML="Your total score is :"+score;
	dsq.innerHTML="Correct answers: "+cq+"<br>"+"Wrong answers: "+(4-cq);
	scbd.style.display="block";
	rst.style.display="block";
}
function restart()
{
	i=1;
	scbd.style.display="none";
	show.style.display="block";
	rst.style.display="none";
	btn1.style.display="block";
	score=0;
	cq=0;
	display();
}
