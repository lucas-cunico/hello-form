import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveUser} from '../services';
import {Link} from 'react-router-dom';

class Confirm extends Component {
    componentDidMount(){
        const {user, history} = this.props;
        if(!user){
            history.push('/form');
        }
    }

    onClick(e){
        e.preventDefault();
        const {user} = this.props;
        saveUser(user).then(alert('Created'));
    }
    render() {
        const {user} = this.props;
        return (
            <main className="container d-flex">
                    <section className="form-group align-items-start m-3 border-right">
                        <div className="input-group pr-3">
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Carregue sua
                                    foto</label>
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                       aria-describedby="inputGroupFileAddon01"/>
                            </div>
                        </div>
                        <div className=" m-3 text-center">
                            <Link to="/form"  className="font-weight-bold text-secondary"> Editar perfil</Link>
                        </div>
                    </section>
                    <section className="flex-grow-1 m-3">
                        <article className="m-3 text-secondary">
                            Eu sou o <b>{user && user.firstname} {user && user.lastname}</b> eu tenho <b>mais de {user && user.age} anos</b> e você pode <br/>
                            enviar e-mail para <b>{user && user.email}</b>. Eu moro no estado do <br/>
                            <b>{user && user.state}</b>. Eu gosto de <b>{user && user.interest}</b>. {user && !!user.newsletter ? "Por-favor me envie newsletters. " : ""}<br/>
                            Para me contratar ligue no telefone {user && user.fone}.
                        </article>

                        <button className="btn btn-secondary form-control" onClick={this.onClick.bind(this)}>Confirmar</button>
                    </section>
            </main>
        );
    }
}

function mapState(state){
    return {user: state ? state.user : null}
}

export default connect(mapState)(Confirm);
