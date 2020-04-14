import React from 'react';
import App from '../App';
interface INavigationProps{

}
interface INavigationState{
    updated:boolean;
}

export default class Navigation extends React.Component<INavigationProps ,INavigationState>{
    constructor ( props:string )
    {
        super( props );
        this.state={updated:true};
        console.log("const ran")


    }
    componentDidMount()
    {
        console.log("componentDidMount ran");
    }
    componentDidUpdate()
    {
        console.log("componentDidupdate ran")
    }
    componentWillUnmount(){
        console.log("copmonentwillunmount ran");
    }
    testUpdate = () =>
    {
        this.setState( { updated: !this.state.updated});
    }
    
    render()

    {
        console.log( "render ran" );
        return(
        <nav id="navigation">
            <h2>Website Navigation</h2>
            <ul>
                <li><a href="#" >Home</a></li>
                <li><a href="#" onClick={this.testUpdate} >About</a></li>
                <li><a href="#" onClick={App.removeNavigation} >Services </a></li>
                <li><a  href="#" >Contact</a></li>
                
            </ul>
            </nav>
    );
    }
}