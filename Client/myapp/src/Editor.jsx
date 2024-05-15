import React from 'react'

const Editor = () => {
  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{display:"flex"}}>
        <div >
          <div style={{width:'70vw',height:"98vh", backgroundColor:'gray'}}>
          EDITOR
          </div>
        </div>
        <div style={{marginTop:"10rem",position:"relative",left:"2rem",overflow:"hidden"}}>
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
  )
}

export default Editor