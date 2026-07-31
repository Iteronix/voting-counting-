let result=document.querySelector("#result");

let surya=document.querySelector("#party1");
let tree=document.querySelector("#party2");
let bell=document.querySelector("#party3");

let showResult=document.querySelector("#ShowResult");

let totalVote=0;
let totalVoteSurya=0;
let totalVoteCongress=0;
let totalVoteBell=0;

surya.addEventListener("click",()=>{
totalVoteSurya++;
totalVote++;
result.textContent="You successfully cast your vote for Surya";
});

tree.addEventListener("click",()=>{
totalVoteCongress++;
totalVote++;
result.textContent="You successfully cast your vote for Congress";
});

bell.addEventListener("click",()=>{
totalVoteBell++;
totalVote++;
result.textContent="You successfully cast your vote for Rasopa";
});

showResult.addEventListener("click",()=>{
result.innerHTML=`
<h2>Final Result</h2>
Surya : ${totalVoteSurya} Votes <br>
Congress : ${totalVoteCongress} Votes <br>
Rasopa : ${totalVoteBell} Votes <br><br>
Total Votes Casted : ${totalVote}
`;
});