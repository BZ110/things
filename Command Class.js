// This is used for the Discord API !!!!
// Does not work on Discord.js, only the Discord API and eris.

export class Command {
    name(name){
        this.itemname = name;
        return this;
    }
    /** ## Type of item.
     * ### Strings:
     * "command": Declare a command.
     * 
     * "string": Declare a string.
     */
    type(typeOfCommand){
        this.typenum = 0;
        switch(typeOfCommand.toLowerCase()){
            case 'command':
                this.typenum = 1;
                 break;
            case 'string':
                this.typenum = 3;
                break;
            default: throw new Error("You must specify a proper type.");
        }
        return this
    }
    description(desc){
        this.desc = desc;
        return this;
    }

    options(ArrayOfItems){
        this.option = [];
        for(let i = 0; i < ArrayOfItems.length; i++){
            this.option[i] = ArrayOfItems[i].ReturnCommand();
        }
        return this;
    }
    ReturnCommand(){
        let err;
        this.desc ? this.desc : this.desc = '';
        this.itemname ? this.itemname : this.itemname = '';
        this.require ? this.require : this.require = false;
        this.typenum ? this.typenum : err? err + new Error("You must specify a proper type."): err = new Error("You must specify a proper type.");
        if (err) throw err;
        let Result = { name: this.itemname, description: this.desc, type: this.typenum, options: this.option }; if(!this.option) delete Result.options;
        return Result;


    }
    required(boolean){
        this.require = boolean;
        return this;
    }
}
