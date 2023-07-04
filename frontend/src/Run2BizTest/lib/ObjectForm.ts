class ObjectForm{
  public create = (obj:any = {}) => {

    // instance new form data
    let objFormData = new FormData();

    // get all field on obj parameter
    let allFields = Object.keys(obj);

    // foreach all fields
    // if not null ou empty, insert on object form data
    allFields.forEach((element:any) => {
        if(obj[element])
        objFormData.append(element, obj[element]);
    });

    // return form data obj
    return objFormData;
  }
}

export default new ObjectForm();