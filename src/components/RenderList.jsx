


export function RenderList ({list}) {

    if (list) {
      return (
        <div>Массив содержит: {list.length} записей
          {list.map((item) => {
              return <Name key={item['id']} props={{...item}}/>
            })
          }
        </div>
      )
    }
  }
  
  
  function Name ({props}) {
    return (
      <p>{props.name} |||||||||||||||||||| {props.phone} {props.email}</p>
    )
  }