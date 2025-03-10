import { insertFunction,getFunction,getFunctionId } from "../Utility/createFactory.js";
import quizzModal from "../Modals/testModal.js";


export const insertData=insertFunction(quizzModal)
export const getData=getFunction(quizzModal)
export const getDataId=getFunctionId(quizzModal)