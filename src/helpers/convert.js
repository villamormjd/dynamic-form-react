const helpers = {
    convertFieldName: function(fieldname){
        const result = fieldname.replace(/([A-Z])/g,' $1');
        const final = result.charAt(0).toUpperCase()+result.slice(1);

        return final;
    }
}

export default helpers;