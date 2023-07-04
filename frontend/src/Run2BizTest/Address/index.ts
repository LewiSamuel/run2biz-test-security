/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../lib/ObjectForm';


/**
 * CLASS ENTITY
 */
class Address{


  /**
   * Tratamento de erros padrão
   * @param error 
   * @returns 
   */
  private defaultCatch(error:any){
    let err = error.toJSON();
    if(err.message === "Network Error"){
      let objErro = {
        message: "Falha ao conectar com a API.",
        status: "ERROR",
        data: {}
      };
      console.error(objErro);
      return objErro;
    }
    return error.response.data;
  }


  /**
   * Tratamento de resposta padrão
   * @param success 
   * @returns 
   */
  private defaultThen(success:any){
    return success.data;
  }




  /**
   * 
   *  METHOD SAVE
   * 
   */
  public async getAddress(commandTxt:File){
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: "http://localhost:5000/v1/question/2/address",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create({ commands: commandTxt })
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }



}

export default new Address();