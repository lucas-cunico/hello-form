import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";

import Field from './Field';
import CustomSlider from './CustomSlider';
import Checkbox from './Checkbox';
import FirstNameInput from './FirstNameInput';
import AdressField from './AddressField';
import serializeForm from 'form-serialize';
import * as actions from '../actions';

class Form extends Component {
    onSubmit(e){
        e.preventDefault();
        const user = serializeForm(e.target, {hash: true});
        this.props.setUser(user, this.props.history);
    }
    render() {
        //TODO transformar todos os inputs em controlaveis para editar baseado nos dados do reducer
        return (
            <main>
                <form className="container d-flex" onSubmit={this.onSubmit.bind(this)}>
                    <section className="form-group align-items-start m-3 border-right">
                        {/*TODO fazer componente de upload personalizado*/}
                        <div className="input-group pr-3">
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Carregue sua
                                    foto</label>
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                       aria-describedby="inputGroupFileAddon01"/>
                            </div>
                        </div>
                    </section>
                    <section className="flex-grow-1 m-3">
                        <Field label="Nome">
                            <FirstNameInput name="firstname" className="col-md-4 form-control mr-2" type="text" placeholder="Primeiro nome" required/>
                            <input name="lastname" className="col-md-4 form-control" type="text" placeholder="Sobrenome" required/>
                        </Field>
                        {/*TODO customizar style do slider*/}
                        <Field label="Idade">
                            <CustomSlider className="col-md-12" name="age" required/>
                        </Field>
                        <Field label="E-mail">
                            <input name="email" className="col-md-12 form-control" type="email" placeholder="david@example.com" required/>
                        </Field>
                        <Field label="Telefone">
                            <input name="fone" className="col-md-12 form-control" type="text" placeholder="(41) 99999-9999" required/>
                        </Field>
                        <Field label="Estado">
                            <select name="state" className="col-md-12 form-control"  required>
                                <option value="Paraná">Paraná</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </Field>
                        <Field label="País">
                            <select name="country" className="col-md-12 form-control"  required>
                                <option>Brasil</option>
                                <option>Outro</option>
                            </select>
                        </Field>
                        <Field label="Endereço">
                            <AdressField/>
                        </Field>
                        {/*TODO fazer multi select customizado */}
                        <Field label="Interesse">
                            <input name="interest" className="col-md-12 form-control" type="text"
                                   placeholder="Futebol, Leirura, Volei"  required/>
                        </Field>
                        <Field>
                            <Checkbox name="newsletter" label="Desejo receber novidade por e-mail"/>
                        </Field>
                        <button className="btn btn-secondary form-control">Salvar</button>
                    </section>
                </form>
            </main>
        );
    }
}

function mapDispatch(dispatch) {
    return {
        setUser: (user, history) => dispatch(actions.setUser(user, history))
    }
}

export default withRouter(connect(null, mapDispatch)(Form));
