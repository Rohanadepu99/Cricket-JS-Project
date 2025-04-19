let teamA;
let teamB;
let countplayer=11;
function teamSub() {
    teamA=document.querySelector('.t1').value;
    teamB=document.querySelector('.t2').value;
    countplayer=document.querySelector('.countPlayer').value;
    let slct1=document.querySelector('.st1');
    slct1.innerHTML=teamA;
    let slct2=document.querySelector('.st2');
    slct2.innerHTML=teamB;
}
let battingTeam;
let bat2;
let totalOver;
let bat1;
function confirmation() {
    battingTeam=document.querySelector('#Team').value;
    bat1=document.querySelector('.TeamAname')
    bat1.innerHTML=battingTeam;
    let tpl=document.querySelector('.Tplayer');
    tpl.innerHTML=battingTeam;
    bat2=document.querySelector('.TeamBname');
    if (teamA!=battingTeam) {
        bat2.innerHTML=teamA;
    }
    else{
        bat2.innerHTML=teamB; 
    }
    totalOver=document.querySelector('.tOver').value;
}
let pl1;
let pl2;
let blr;
function EnterPlayer() {

    pl1=document.querySelector('.pl1').value;
    pl2=document.querySelector('.pl2').value;
    blr=document.querySelector('.pl3').value;
    if (pl1==""||pl2==""||blr=="") {
        alert("Fill name");
    }
    else{
        document.querySelector('.pln1').innerHTML=pl1;
        document.querySelector('.pln2').innerHTML=pl2;
        document.querySelector('.ballerName').innerHTML=blr;
    }
    
}



let ball_wick=document.querySelector('.ball-wick');
let ball_run=document.querySelector('.bwlr-run');
let ball_over=document.querySelector('.pl2bow');

let bowlerRun=0;
let bowlerBall=0;
let maiden=0;
let maidenRUN=0;
let ballWicket=0;
let Balleco=0;
let BallOver=0;
let ecoBall=0;

function updateBallRun(r) {
    bowlerRun=r;
    maidenRUN+=r;
    ballWicket=0;
    if (!nbtog) {
        bowlerBall++;
        ecoBall++;
   
    }
    
    if (bowlerBall==6) {
        BallOver++;
        bowlerBall=0;
        if (maidenRUN==0) {
            maiden++;
           
        }
        maidenRUN=0;
    }

    update();
    
}
function updateWicket(){
    bowlerRun=0;
    ballWicket=1;
    if (!nbtog) {
        bowlerBall++;
    }
    if (bowlerBall==6) {
        BallOver++;
        bowlerBall=0;
        if (maidenRUN==0) {
            maiden++;   
        }
    }
    ecoBall++;
    update();
}
let fours=0;
let sixs=0;
let fours2=0;
let sixs2=0;
let Strike_rate=0;
let Strike_rate2=0
let batsman={};
let Inning_one=true;

function updateBatmanData() {
    if (st) {     
        if (batsman[pl1]) {
            batsman[pl1].pl1Score=pl1Score;
            batsman[pl1].pl1ball=pl1ball
            batsman[pl1].fours=fours;
            batsman[pl1].sixs=sixs;
            Strike_rate=((batsman[pl1].pl1Score/pl1ball)*100).toFixed(1)
            batsman[pl1].Strike_rate=Strike_rate;
            if (Inning_one){
                
                updateBatTable()
                
            }
            else{
                updateBatTable_2()
                
            }

        }
        else{
            
            batsman[pl1]={pl1Score:pl1Score, pl1ball:pl1ball, fours:fours, sixs:sixs, Strike_rate:Strike_rate}
            if (Inning_one){  
                updateBatTable()
               
            }
            else{
                updateBatTable_2()
                
            }
            pl1Score=0;
            pl1ball=0;
            fours=0;
            sixs=0;
            
        }
    }
    else{
        if (batsman[pl2]) {
            batsman[pl2].pl2Score=pl2Score;
            batsman[pl2].pl2ball=pl2ball
            batsman[pl2].fours2=fours2;
            batsman[pl2].sixs2=sixs2;
            Strike_rate2=((batsman[pl2].pl2Score/pl2ball)*100).toFixed(1)
            batsman[pl2].Strike_rate2=Strike_rate2;
            if (Inning_one){
                
                updateBatTable()
            }
            else{
                updateBatTable_2()
                
            }
        }
        else{
            batsman[pl2]={pl2Score:pl2Score, pl2ball:pl2ball, fours2:fours2, sixs2:sixs2, Strike_rate2:Strike_rate2}
            if (Inning_one){
                
                updateBatTable()
            }
            else{
                updateBatTable_2()
               
                
            }
            pl2Score=0;
            pl2ball=0;
            fours2=0;
            sixs2=0;

        } 
    }
  
}



function updateBatTable(){
   
    let table_bat1_body = document.querySelector('.batterTable').getElementsByTagName('tbody')[0];
    table_bat1_body.innerHTML = '';  // Clear the table initially
    

    for(let bat in batsman)
    {
        if (batsman[bat].pl1ball || batsman[bat].pl1Score || batsman[bat].fours || batsman[bat].sixs || batsman[bat].Strike_rate) {
            // Insert row for pl1 data if it exists
            let row1 = table_bat1_body.insertRow();
            let Btname1 = row1.insertCell(0);
            let Btrun1 = row1.insertCell(1);
            let Btover1 = row1.insertCell(2);
            let fours1 = row1.insertCell(3);
            let sixs1 = row1.insertCell(4);
            let sr1 = row1.insertCell(5);
            
            Btname1.textContent = bat;
            Btover1.textContent = batsman[bat].pl1ball || '';
            Btrun1.textContent = batsman[bat].pl1Score || '';
            fours1.textContent = batsman[bat].fours || '';
            sixs1.textContent = batsman[bat].sixs || '';
            sr1.textContent = batsman[bat].Strike_rate || '';
        }

        if (batsman[bat].pl2ball || batsman[bat].pl2Score || batsman[bat].fours2 || batsman[bat].sixs2 || batsman[bat].Strike_rate2) {
            // Insert row for pl2 data if it exists
            let row2 = table_bat1_body.insertRow();
            let Btname2 = row2.insertCell(0);
            let Btrun2 = row2.insertCell(1);
            let Btover2 = row2.insertCell(2);
            let fours2 = row2.insertCell(3);
            let sixs2 = row2.insertCell(4);
            let sr2 = row2.insertCell(5);
           
            Btname2.textContent = bat;
            Btover2.textContent = batsman[bat].pl2ball || '';
            Btrun2.textContent = batsman[bat].pl2Score || '';
            fours2.textContent = batsman[bat].fours2 || '';
            sixs2.textContent = batsman[bat].sixs2 || '';
            sr2.textContent = batsman[bat].Strike_rate2 || '';
        }
    }
    rowLen();
}

let table1_row;
let rowCount;

function rowLen() {
    table1_row=document.querySelector('.batterTable').getElementsByTagName('tbody')[0] 
    rowCount=table1_row.rows.length;
    // console.log(rowCount);
    
}





function updateBatTable_2(){
    let table_bat2_body = document.querySelector('.batterTable2').getElementsByTagName('tbody')[0];
    table_bat2_body.innerHTML = '';  // Clear the table initially
    
    for(let bat in batsman)
    {
        if (batsman[bat].pl1ball || batsman[bat].pl1Score || batsman[bat].fours || batsman[bat].sixs || batsman[bat].Strike_rate) {
            // Insert row for pl1 data if it exists
            let row1 = table_bat2_body.insertRow();
            let Btname1 = row1.insertCell(0);
            let Btrun1 = row1.insertCell(1);
            let Btover1 = row1.insertCell(2);
            let fours1 = row1.insertCell(3);
            let sixs1 = row1.insertCell(4);
            let sr1 = row1.insertCell(5);
             
            Btname1.textContent = bat;
            Btover1.textContent = batsman[bat].pl1ball || '';
            Btrun1.textContent = batsman[bat].pl1Score || '';
            fours1.textContent = batsman[bat].fours || '';
            sixs1.textContent = batsman[bat].sixs || '';
            sr1.textContent = batsman[bat].Strike_rate || '';
        }

        if (batsman[bat].pl2ball || batsman[bat].pl2Score || batsman[bat].fours2 || batsman[bat].sixs2 || batsman[bat].Strike_rate2) {
            // Insert row for pl2 data if it exists
            let row2 = table_bat2_body.insertRow();
            let Btname2 = row2.insertCell(0);
            let Btrun2 = row2.insertCell(1);
            let Btover2 = row2.insertCell(2);
            let fours2 = row2.insertCell(3);
            let sixs2 = row2.insertCell(4);
            let sr2 = row2.insertCell(5);
           
            Btname2.textContent = bat;
            Btover2.textContent = batsman[bat].pl2ball || '';
            Btrun2.textContent = batsman[bat].pl2Score || '';
            fours2.textContent = batsman[bat].fours2 || '';
            sixs2.textContent = batsman[bat].sixs2 || '';
            sr2.textContent = batsman[bat].Strike_rate2 || '';
        }
    }
   
    for (let index = 0; index < rowCount; index++) {
        if (table_bat2_body.rows.length >= 0) {
            table_bat2_body.deleteRow(0);
        }
    } 
    
}

let Last_Inning_ball=0;
let bowler={};
let datalist=document.querySelector('#bowlers');

function update(){
    
if (bowler[blr]) {
    bowler[blr].bowlerRun+=bowlerRun;
    bowler[blr].maiden=maiden;
    bowler[blr].ballWicket+=ballWicket;
    bowler[blr].bowlerBall=`${BallOver}.${bowlerBall}`;
    Balleco=bowler[blr].bowlerRun/(ecoBall/6);
    bowler[blr].Balleco=Balleco.toFixed(2);

    ball_wick.innerHTML=bowler[blr].ballWicket;
    ball_run.innerHTML=bowler[blr].bowlerRun;
    ball_over.innerHTML=bowler[blr].bowlerBall;
    if (Inning_one) {
        updateTable();
    }
    else{
        if (Last_Inning_ball==1) {
            updateTable();
            Last_Inning_ball++; 
        }
        updateTable2_ball();
        Inning_one=false;
    }

}
else
{
    
    bowler[blr]={bowlerRun:bowlerRun, bowlerBall:bowlerBall, maiden:maiden, ballWicket:ballWicket, Balleco:Balleco}
    let option = document.createElement("option");
    option.value = blr;
    datalist.appendChild(option); 
    
    ball_wick.innerHTML=bowler[blr].ballWicket;
    ball_run.innerHTML=bowler[blr].bowlerRun;
    ball_over.innerHTML=`${0}.${bowler[blr].bowlerBall}`
    maiden=0;
    BallOver=0;
    if (Inning_one) {   
        updateTable();
    }
    else{
        if (Last_Inning_ball==1) {
            updateTable();
            Last_Inning_ball++; 
        }
        updateTable2_ball();
        Inning_one=false;
    }
    ecoBall=1;
    bowlerBall.value='';
    bowlerRun.value='';
    maiden.value='';
    ballWicket.value='';
    Balleco.value=''
}
}



function updateTable() {
    let tablebody=document.querySelector('.ballerTable').getElementsByTagName('tbody')[0];
    tablebody.innerHTML='';

    for(let bowl in bowler)
    {
        let row=tablebody.insertRow()
        let Bname=row.insertCell(0)
        let Bover=row.insertCell(1)
        let Brun=row.insertCell(2)
        let maiden=row.insertCell(3)
        let Bwicket=row.insertCell(4)
        let Beco=row.insertCell(5)
        
        Bname.textContent=bowl;
        Bover.textContent=bowler[bowl].bowlerBall;
        Brun.textContent=bowler[bowl].bowlerRun;
        maiden.textContent=bowler[bowl].maiden;
        Bwicket.textContent=bowler[bowl].ballWicket;
        Beco.textContent=bowler[bowl].Balleco;

    }
    ballrow();
}

let table1_ball_row;
let ball_rowCount;

function ballrow() {
    table1_ball_row=document.querySelector('.ballerTable').getElementsByTagName('tbody')[0] 
    ball_rowCount=table1_ball_row.rows.length;
    console.log(ball_rowCount);
    
}

function updateTable2_ball() {
    let table2body=document.querySelector('.ballerTable2').getElementsByTagName('tbody')[0]; 
    table2body.innerHTML='';

    for(let bowl in bowler)
        {
            let row=table2body.insertRow()
            let Bname=row.insertCell(0)
            let Bover=row.insertCell(1)
            let Brun=row.insertCell(2)
            let maiden=row.insertCell(3)
            let Bwicket=row.insertCell(4)
            let Beco=row.insertCell(5)
            
            Bname.textContent=bowl;
            Bover.textContent=bowler[bowl].bowlerBall;
            Brun.textContent=bowler[bowl].bowlerRun;
            maiden.textContent=bowler[bowl].maiden;
            Bwicket.textContent=bowler[bowl].ballWicket;
            Beco.textContent=bowler[bowl].Balleco;
    
        }

        for (let index = 0; index < ball_rowCount; index++) {
            if (table2body.rows.length >= 0) {
                table2body.deleteRow(0);
            }
        } 
    
}

function PlayerConfirmation() {
    pl1=document.querySelector('.pl1').value;
    pl2=document.querySelector('.pl2').value;
    blr=document.querySelector('.pl3').value;
    if (pl1==""||pl2==""||blr=="") {
        alert("Fill name");
    }
    else{
        return true;
    }
}

let popb=document.querySelector('.pop-bowler');
function popbowler() {
    document.querySelector('.popl3').value='';  
    popb.style.display='flex'; 
}
function subpopbowler() {
    blr=document.querySelector('.popl3').value; 
    document.querySelector('.pl3').value=blr; 
    if (pl1==""||pl2==""||blr=="") {
        alert("Fill name");
    }
    else{

        document.querySelector('.ballerName').innerHTML=blr;
        popb.style.display='none'; 
    }
}

let pop_bat=document.querySelector('.pop_bat');

function popbat() {
    document.querySelector('.pop_pl').value='';
    pop_bat.style.display='flex';
}
function subpopbat() {
    if (!(balls==0)) 
        {
    if (st) {
        pl1=document.querySelector('.pop_pl').value;
        document.querySelector('.pl1').value=pl1;
        document.querySelector('.pln1').innerHTML=pl1; 
        
    }
    else{
        pl2=document.querySelector('.pop_pl').value;
        document.querySelector('.pl2').value=pl2;
        document.querySelector('.pln2').innerHTML=pl2;
        
    }
   
}
else{
    if (st) {
        pl2=document.querySelector('.pop_pl').value;
        document.querySelector('.pl2').value=pl2;
        document.querySelector('.pln2').innerHTML=pl2;
       
    }
    else{
        pl1=document.querySelector('.pop_pl').value;
        document.querySelector('.pl1').value=pl1;
        document.querySelector('.pln1').innerHTML=pl1; 
         
    }
}
if (pl1=="" || pl2=="") {
    alert("ENTER PLAYER NAME")
}
else{
    pop_bat.style.display='none';
}

}

let pop_player=document.querySelector('.players_pop');

function pop_players() {
    pop_player.style.display='flex'
}

function sub_popplayers() {

    pl1=document.querySelector('.pop_ply1').value;
    document.querySelector('.pl1').value=pl1;
    document.querySelector('.pln1').innerHTML=pl1; 

    pl2=document.querySelector('.pop_ply2').value;
    document.querySelector('.pl2').value=pl2;
    document.querySelector('.pln2').innerHTML=pl2;

    blr=document.querySelector('.pop_ply3').value; 
    document.querySelector('.pl3').value=blr; 
    if (pl1==""||pl2==""||blr=="") {
        alert("Fill name");
    }
    else{
        pop_player.style.display='none'; 
    }
}

let balltime=document.querySelector('.balltimeline');
let r=document.querySelector('.runboard')
let score=0;
let balls=0;
let overNum=0;
let balltimeline=[];
let Wicket=0;

let nbtog=false;
let widetog=false;

function resetFlags() {
    nbtog = false;
    widetog = false;
    runtog=false;
}

function zero() {
    
    if (!nbtog) {
        balls++;
    } 
    // else if (balls == 0) {
    //     over();
    // }
    
    toggleRun(0);
    r.innerHTML=score; 
    over();
    ballTimeLine(nbtog ? "nb0" : 0);  
    updateBallRun(0);
    
    resetFlags()

}

function one() {
    score=score+1;
    if (!nbtog) {  
       balls++;
    }
   
    toggleRun(1);
    r.innerHTML=score; 
    over();
    toggleStrike();
    ballTimeLine(nbtog ? "nb1" : 1);
    updateBallRun(1);
    resetFlags() 
    
}

function two() {
    score=score+2;
    if (!nbtog) {  
        balls++;
     } 
    
    r.innerHTML=score;  
    toggleRun(2);  
    over()
    ballTimeLine(nbtog ? "nb2" : 2);
    updateBallRun(2);
    resetFlags() 

}

function three() {
    score=score+3;
    if (!nbtog) {  
        balls++;
     }
    toggleRun(3)
    r.innerHTML=score;
    over()
    ballTimeLine(nbtog ? "nb3" : 3)
    toggleStrike()
    updateBallRun(3);
    resetFlags() 

}

function four() {
    score=score+4;
    if (!nbtog) {  
        balls++;
     }
    r.innerHTML=score;  
    toggleRun(4)
    updateBallRun(4);
    if (st) {
        fours++;
       
    }
    else{
        fours2++
       
    }
    over()
    ballTimeLine(nbtog ? "nb4" : 4)
    resetFlags() 

}

function six() {
    score=score+6;
    if (!nbtog) {  
        balls++;
     }
    
    r.innerHTML=score; 
    toggleRun(6) 
    updateBallRun(6);
    if (st) {
        sixs++;
       
    }
    else{
        sixs2++
        
    }
    over();
    ballTimeLine(nbtog ? "nb6" : 6)
    resetFlags() 

}

let tog=true;
let w=document.querySelector('.wick');
function wicket() {
   
    if (st){
        document.querySelector('.pln1').innerHTML=`(wicket)`;
        document.querySelector('.pl1').value=''
        popbat(); 
        
    }

    else{
        document.querySelector('.pln2').innerHTML=`(wicket)`;
        document.querySelector('.pl2').value='' 
        popbat();
    }
    if (Wicket<=(countplayer-2)) {
        Wicket++;
        if (!nbtog) {
            balls++;

        }
       
        
        w.innerHTML=Wicket;
        over();
        ballTimeLine(nbtog ? "nbW" : "W")
    }
    else{
        alert("ALL OUT")
    }

    updateWicket();
    resetFlags(); 

}
function noBall(){
    if (tog) {
        
        nbtog=true;
        
    }
    else{
        balltime.innerHTML='';
        nbtog=true;
        tog=true;
    }
    }
function wideBall() {
    if (tog) {
        ballTimeLine("wd")
        widetog = true;

    }
    else{
        balltime.innerHTML='';
        ballTimeLine("wd")
        widetog = true;
        tog=true; 
    }
}


let runtog=false;
 function runOut() {
    runtog=true;
    toggleBall()
    strikeChange()
    wicket()
    
 }

function strikeChange() {
   toggleStrike()
}

 function ballTimeLine(event) {
    balltime.innerHTML+=`${event} | `
 }

 let ballNum=document.querySelector('.ballNum');
 let overnum=document.querySelector('.overNum');
 
 function over() {
    if (balls==1 && !nbtog && balltime.innerHTML.endsWith(' | nb | ')) {
        balltime.innerHTML = balltime.innerHTML.replace('nb | ', '');
    }
    else if (balls === 1 && !nbtog) {
        balltime.innerHTML = '';
    }

    if (balls<=5) {
        ballNum.innerHTML=balls;
        tog=true;
        if (!runtog) { 
            toggleBall()
        }
        runRate()
        if (!Inning_one) {
            
            requireRun();
            
        }
    }
    else{

        balls=0;
        overNum=overNum+1;
        ballNum.innerHTML=balls;
        overnum.innerHTML=overNum;
        tog=false;
        
        if (!runtog) { 
            toggleBall()
        }
        toggleStrike()
        runRate()
        document.querySelector('.pl3').value='' 
       popbowler()
       nextInning() 
    }
    
 }
 
let pll1=document.querySelector('.ppl1 i');
let pll2=document.querySelector('.ppl2 i');
let pl1s=document.querySelector('.pl1s')
let pl2s=document.querySelector('.pl2s')
let pl1b=document.querySelector('.pl1b')
let pl2b=document.querySelector('.pl2b')
let pl1ball=0;
let pl2ball=0
let pl1Score=0;
let pl2Score=0;
pll2.style.display='none';
let st=true;
let Bush=true;

function toggleRun(r) {
    if (st){
       updateBatmanData()
        pl1Score=pl1Score+r;
        pl1s.innerHTML=pl1Score;
    }
    else{
        updateBatmanData()
        pl2Score=pl2Score+r;
        pl2s.innerHTML=pl2Score;    
    }
    
}

function toggleBall() {

    if(!nbtog) {
        if (st) {
            pl1ball++;                 //pl1ball=pl1ball+1;
            updateBatmanData();
            pl1b.innerHTML = pl1ball;
        } else {
            pl2ball++;
            updateBatmanData(); 
            pl2b.innerHTML = pl2ball;
        }
    }
    
   
}

function toggleStrike() {

    if (st) {   
       pll1.style.display='none';
       pll2.style.display='inline'; 
       st=false;
    }
    else{

        pll1.style.display='inline';
       pll2.style.display='none';
       st=true;
    }
}
let currRR=document.querySelector('.runrr')
let rrBall=0;
let FinalRR;

function runRate() {
    if (!nbtog) {
        rrBall++;
    }
    FinalRR=score/rrBall;
    FinalRR=FinalRR*6;
    FinalRR=FinalRR.toFixed(2);
    currRR.innerHTML=FinalRR;
}

let dumyscore;

function reset() {
    Inning_one=false;
    dumyscore=score;
    score=0;
    r.innerHTML=score;
    Wicket=0;
    w.innerHTML=Wicket;
    balls=0;
    overNum=0;
    ballNum.innerHTML=balls;
    overnum.innerHTML=overNum;
    document.querySelector('.pln1').innerHTML=`player1`;
    document.querySelector('.pl1').value=''

    document.querySelector('.pln2').innerHTML=`player2`;
    document.querySelector('.pl2').value=''
    
    rrBall=0;
    FinalRR=0;
    currRR.innerHTML=FinalRR;
   
    pl1Score=0;
    pl2Score=0
    pl1s.innerHTML=pl1Score;
    pl2s.innerHTML=pl2Score;
    

    pl1ball=0;
    pl2ball=0;
    pl1b.innerHTML = pl1ball;
    pl2b.innerHTML = pl2ball;

    
    Last_Inning_ball++;

    margin.innerHTML='';
    required_rate.innerHTML='';
    Next_inning_rr.innerHTML='';

    
    if (Match_end) {
        if ((finalScore-dumyscore)>0) {
            
            margin.innerHTML=`${battingTeam} Team Win by ${finalScore-dumyscore}`
            
        }
        else{
            margin.innerHTML=`${(battingTeam==teamA?teamB:teamA)} Team Win by ${(countplayer-1)-Wicket} Wicket`
        }
        
    }
    


}

let margin=document.querySelector('.margin');
let required_rate=document.querySelector('.CR');
let Next_inning_rr=document.querySelector('.Rr');
let Match_end=false;
let finalScore;
function nextInning() {
    if (overNum==totalOver) {

        if (Match_end) {
            popb.style.display='none';
            Winner()
            reset();
        }
        else{
            if(st){
                strikeChange();
            }
        pop_players()
        Match_end=true;
        finalScore=score+1;
        popb.style.display='none';
        alert("End Inning");
        reset();
        requireRun();
        }
              
    }
 
}
function Winner() {
    if ((finalScore-score)>0) {
        
        alert(`${battingTeam} Team Win by ${finalScore-score}`);
        bat1.style.color='orange'
        bat1.innerHTML=`<i class="ri-vip-crown-2-line"> WINNER </i><i class="ri-sparkling-2-fill"></i>`
    }
    else{

        alert(`batting Team Win by ${(countplayer-1)-Wicket} Wicket`)
        bat2.style.color='orange'
        bat2.innerHTML=`<i class="ri-vip-crown-2-line"> SUPER WIN </i><i class="ri-sparkling-2-fill"></i>`
    }
    
}

function requireRun() {
    if (score>=finalScore) {
        alert(`${(battingTeam==teamA?teamB:teamA)} Team Win by ${(countplayer-1)-Wicket} Wicket`);
        margin.innerHTML=`Win by ${(countplayer-1)-Wicket} Wicket`;
        bat2.style.color='orange'
        bat2.innerHTML=`<i class="ri-vip-crown-2-line"> WINNER </i><i class="ri-sparkling-2-fill"></i>`
        reset()
    }
    else{
    margin.innerHTML=`${finalScore-score} from ${(totalOver*6)-rrBall} balls`;
    required_rate.innerHTML=FinalRR;
    Next_inning_rr.innerHTML=`${((finalScore-score)/((totalOver*6)-rrBall)*6).toFixed(2)}`;
    }
}

    