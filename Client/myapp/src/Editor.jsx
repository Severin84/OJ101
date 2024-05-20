import React from 'react'

const Editor = ({question}) => {
  return (
    <>
    <div>
    <div style={{marginTop:"3rem",marginLeft:"30rem"}}>
         <h2>Question: {question}</h2>
    </div>
      <div style={{display:"flex",marginLeft:"25rem",marginTop:"5rem"}}>
        <div>
          <select name="language" style={{width:"5rem"}}>
            <option value="Java">Java</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </select>
        </div>
        {/* <div >
          <div style={{width:'70vw',height:"98vh", backgroundColor:'gray'}}>
          EDITOR
          </div>
        </div> */}
        <div>
          <div>
            <textarea cols={50} rows={30}/>
          </div>
          <div>
           <input type="file"/>
          </div>
        </div>

        <div style={{marginTop:"5rem",position:"relative",left:"2rem",overflow:"hidden"}}>
           <div style={{display:"flex",flexDirection:"column"}}>
           <textarea  name='paragraph_text' cols={50} rows={10}></textarea>
           <div style={{height:"10rem",width:"25rem",border:"solid"}}>Output</div>
           </div>
           <div style={{display:"flex",position:"relative",left:"8rem"}}>
            <button style={{backgroundColor:"red",color:"white",width:"5rem",height:'3rem',borderRadius:"1rem"}}>Run</button>
            <button style={{backgroundColor:"red",color:"white",width:"5rem",height:'3rem',borderRadius:"1rem"}}>Submit</button>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Editor