import axios from 'axios';

export class API {
    constructor () {
        this.URL = process.env.REACT_APP_URL_API

        this.Api = axios.create({
            baseURL:this.URL
        });

        this.GET_URL = {
            'getProducts':process.env.REACT_APP_GET_PRODUCTS_API + '/sdf',
            'getProductsCorrect':process.env.REACT_APP_GET_PRODUCTS_API,
        }

        this.DEFAULT_STATE = {data:null, error:null, isLoad:false}
        this.DEFAULT_KEY_DATA = 'data'
    }

    isBadRequestName (nameRequest) {
        return !Object.keys(this.GET_URL).includes(nameRequest) ? true : false
    }

    get = async (nameRequest, paramsRequest={}, keyData=this.DEFAULT_KEY_DATA) => {
        const result = this.DEFAULT_STATE
        if (this.isBadRequestName(nameRequest)) {
            return {...result, error:this.catchError('localError', nameRequest)}
        }

        try {
            const { [keyData]:data } = await this.Api.get(this.GET_URL[nameRequest], paramsRequest)
            result.data=data
        }
        catch (error) {
            result.error=this.catchError(error)
        }

        return {...result}
    }

    catchError (error, freeText) {
        if (error.response) {
            const { data, status, headers } = error.response // Статус ответа выходит за пределы 2xx
            return <ErrorServer error={status}/>
          } else if (error.request) { // Отсутствует тело ответа
            // console.error(error.request)
          } else if ('localError') {
            // Отсутствует тело ответа
            // console.error(error.request)
            return <ErrorServer error={`не верный запрос: ${this.URL + freeText}`}/>
          } else {
            // Ошибка, связанная с неправильной настройкой запроса
            // console.error(error.message)
            // this.error = 'Error 404'
          }
          // Другая ошибка
        //   console.error(error.config)
        //   // Подробная информация об ошибке
        //   console.error(error.toJSON())
        
    }
}


function ErrorServer ({error, data=''}) {

    return (
            <div>Error Server {error} {data}</div>
        )
}
