import {ReactNode} from "react";

export interface TabMenuType{
    key:string
    title:string
    tabBarIcon?:(props:{focused:boolean,color:string,size:number})=>ReactNode
}
