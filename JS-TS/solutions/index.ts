#!/usr/bin/env ts-node
import {ToDoManager} from './todo-manager';

const manager = new ToDoManager()

async function main(){
    const [,, command, ...args] = process.argv;
    switch(command){
        case "init" :
            await manager.init()
            console.log("Initialization");
            break;
        case "add" :
            const [title, description] = args;
            if(!title) {
                return console.error("Title is required")
            }
            await manager.add(title, description)
             console.log("Todo added")
            break;
        case "complete" :
            const id = Number(args[0]);
            if(isNaN(id)){
                return console.error("Invalid ID")
            }
            await manager.complete(id)
            console.log("Todo completed")
            break;
        case "list" :
                const result = await manager.list();
            console.log(result);
            break;
        default:
            console.log(
            `Use next commands:
            - init
            - add
            - complete
            - list`)
    }
}
main().catch((e) => console.error(e));