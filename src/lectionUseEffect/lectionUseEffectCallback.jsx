import {useState, useEffect, useCallback} from 'react'



export function CountElement (params) {
    const [currentCount, setCurrentCount] = useState(0)

    return (
        <>
            <DivGray>
                <Button setCurrentCount={setCurrentCount}/>
            </DivGray>

            <DivGray>
                <RenderCurrentState currentCount={currentCount}/>
            </DivGray>
        </>
    )
}


function DivGray ({children}) {
    return (
        <div className="margin-auto-0 with-80vw" style={{'marginTop':'550px', 'background':'gray', 'color':'whitesmoke', 'fontSize':'50px', 'textAlign':'center'}}>
            {children}
        </div>
    )
}


const Button = ({setCurrentCount}) => {
    return (
        <>{<button onClick={() => setCurrentCount(pre => pre+1)}>Click My</button>}</>
    )
}

function RenderCurrentState (params) {
    return (
        <>{params.currentCount}</>
    )   
}



