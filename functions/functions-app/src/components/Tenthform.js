import React, { useRef } from 'react'

function Tenthform() {
    let FirstnameInputRef=useRef();
    let LastnameInputRef=useRef();
    let engInputRef=useRef();
    let telInputRef=useRef();
    let hindiInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let resultParaRef=useRef();

    let engSpanRef=useRef();
    let telSpanRef=useRef();
    let hindiSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();

    let engonfocus=()=>{
        resultParaRef.current.innerHTML="onFocus";
        engInputRef.current.style.backgroundColor="skyblue";
   }
   let engonchange=()=>{
    resultParaRef.current.innerHTML="onChange";
    engInputRef.current.style.backgroundColor="brown";
    engSpanRef.current.innerHTML=engInputRef.current.value>34?"Pass":"Fail";
    engSpanRef.current.style.backgroundColor=engInputRef.current.value>34?"green":"Red";
   }
   let engonblur=()=>{
    resultParaRef.current.innerHTML="";
    engInputRef.current.style.backgroundColor="";
   }
  let telonfocus=()=>{
    telInputRef.current.style.backgroundColor="skyblue";
  }
  let telonchange=()=>{
    telInputRef.current.style.backgroundColor="brown";
    telSpanRef.current.innerHTML=telInputRef.current.value>34?"Pass":"Fail";
    telSpanRef.current.style.backgroundColor=telInputRef.current.value>34?"green":"Red";
  }
  let telonblur=()=>{
    telInputRef.current.style.backgroundColor="";
  }
  let hindionfocus=()=>{
    hindiInputRef.current.style.backgroundColor="skyblue";
  }
  let hindionchange=()=>{
    hindiInputRef.current.style.backgroundColor="brown";
    hindiSpanRef.current.innerHTML=hindiInputRef.current.value>34?"Pass":"Fail";
    hindiSpanRef.current.style.backgroundColor=hindiInputRef.current.value>34?"green":"Red";
  }
  let hindionblur=()=>{
    hindiInputRef.current.style.backgroundColor="";
  }
  let matonfocus=()=>{
    matInputRef.current.style.backgroundColor="skyblue";
  }
  let matonchange=()=>{
    matInputRef.current.style.backgroundColor="brown";
    matSpanRef.current.innerHTML=matInputRef.current.value>34?"Pass":"Fail";
    matSpanRef.current.style.backgroundColor=matInputRef.current.value>34?"green":"Red";
  }
  let matonblur=()=>{
    matInputRef.current.style.backgroundColor="";
  }
  let scionfocus=()=>{
    sciInputRef.current.style.backgroundColor="skyblue";
  }
  let scionchange=()=>{
    sciInputRef.current.style.backgroundColor="brown";
    sciSpanRef.current.innerHTML=sciInputRef.current.value>34?"Pass":"Fail";
    sciSpanRef.current.style.backgroundColor=sciInputRef.current.value>34?"green":"Red";
  }
  let scionblur=()=>{
    sciInputRef.current.style.backgroundColor="";
  }
  let soconfocus=()=>{
    socInputRef.current.style.backgroundColor="skyblue";
  }
  let soconchange=()=>{
    socInputRef.current.style.backgroundColor="brown";
    socSpanRef.current.innerHTML=socInputRef.current.value>34?"Pass":"Fail";
    socSpanRef.current.style.backgroundColor=socInputRef.current.value>34?"green":"Red";
  }
  let soconblur=()=>{
    socInputRef.current.style.backgroundColor="";
  }

  return (
    <div>
    <form className='form'>
    <h2><u>MARKS SHEET</u></h2>
    <div>
      <label>First Name:</label>
      <input ref={FirstnameInputRef} type='text'></input>
      <span ></span>
    </div>
    <div>
      <label>Last Name :</label>
      <input ref={LastnameInputRef} type='text'></input>
      <span></span>

    </div>
     <div>
      <label>English :</label>
      <input ref={engInputRef} type='Number' 
       onFocus={()=>{engonfocus();}}
       onChange={()=>{engonchange();}}
       onBlur={()=>{engonblur();}}
      ></input>
      <span ref={engSpanRef}></span>
    </div>
    <div>
      <label>Telugu :</label>
      <input ref={telInputRef} type='Number'
      onFocus={()=>{telonfocus();}}
      onChange={()=>{telonchange();}}
      onBlur={()=>{telonblur();}}
      ></input>
      <span ref={telSpanRef}></span>
    </div>
    <div>
      <label>Hindi :</label>
      <input ref={hindiInputRef} type='Number'
        onFocus={()=>{hindionfocus();}}
        onChange={()=>{hindionchange();}}
        onBlur={()=>{hindionblur();}}
      ></input>
      <span ref={hindiSpanRef}></span>
    </div>
    <div>
      <label>Maths :</label>
      <input ref={matInputRef} type='Number'
        onFocus={()=>{matonfocus();}}
        onChange={()=>{matonchange();}}
        onBlur={()=>{matonblur();}}
      ></input>
      <span ref={matSpanRef}></span>
    </div>
     <div>
      <label>Science :</label>
      <input ref={sciInputRef} type='Number'
        onFocus={()=>{scionfocus();}}
        onChange={()=>{scionchange();}}
        onBlur={()=>{scionblur();}}
      ></input>
      <span ref={sciSpanRef}></span>
    </div>
    <div>
      <label>Social :</label>
      <input ref={socInputRef} type='Number'
    onFocus={()=>{soconfocus();}}
    onChange={()=>{soconchange();}}
    onBlur={()=>{soconblur();}}></input>
       <span ref={socSpanRef}></span>
    </div>
    <div>
    <button type='button'onClick={()=>{
        let engmarks= Number(engInputRef.current.value);
        let telmarks= Number(telInputRef.current.value);
        let hindimarks= Number(hindiInputRef.current.value);
        let matmarks= Number(matInputRef.current.value);
        let scimarks= Number(sciInputRef.current.value);
        let socmarks= Number(socInputRef.current.value);
        let result;
       
        if(engmarks>=34&& telmarks>=34&& hindimarks>=34&& matmarks>=34&& scimarks>=34&& socmarks>=34){
        result="passed";

        }else{
        result="Failed";
        }

        let Totalmarks=engmarks+telmarks+hindimarks+matmarks+scimarks+socmarks;
        let perc=(Totalmarks/600)*100;
        // alert(`Total Marks of ${FirstnameInputRef.current.value} ${LastnameInputRef.current.value} are ${Totalmarks} and overall result is ${result}` );
        resultParaRef.current.innerHTML=`TotalMarks of ${FirstnameInputRef.current.value} ${LastnameInputRef.current.value} are ${Totalmarks} with percentage of ${perc.toFixed(2)}% and overall result is ${result}`;
        }}>TOTAL</button>
        </div>
        <div>
           <p id='para' ref={resultParaRef}></p>
        </div>
        </form>
      
    </div>
  )
}

export default Tenthform
