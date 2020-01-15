import React, { Component } from 'react';

class Publications extends Component {
  render() {

    if(this.props.data){
      var publications = this.props.data.publications.map(function(publications){
        return <li key={publications.title}>
           <blockquote>
               <p><a href={publications.url}><em>{publications.title}</em></a></p>
               <cite>{publications.journal}<span> &bull; {publications.date}</span></cite><br /> 
            </blockquote>
         </li>
      })
    }

    return (
      <section id="publications">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Publications</span></h1>
            </div>

            <div className="ten columns flex-container">
               <ul className="slides">
                  {publications}
               </ul>
            </div>
         </div>
      </div>
      </section>
    );
  }
}

export default Publications;
