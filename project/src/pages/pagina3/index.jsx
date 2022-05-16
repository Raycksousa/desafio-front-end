import React from 'react';
import './styles.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import iconPepople from './assest/people.png';
import padlock from './assest/padlock.png';
import iconEmail from './assest/email.png';
import iconTel from './assest/tel.png'
import photo from './assest/michael-b-jordan 1.png'



function Pagina3() {

	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [password, setPassaword] = useState("")
	const [phone, setPhone] = useState("")
	const [nationality, setNationality] = useState()
	const [botaoSalve,setBotaosalve]= useState()
	const navegar = useNavigate();
	var inputUser = localStorage.getItem('ls_User');
	var inputEmail = localStorage.getItem('ls_Email');

	const salveDate= e =>{
		let obj = {senha:password,phone:phone,nacionalidade:nationality}
		localStorage.setItem('dados',JSON.stringify(obj));
                alert("Dados salvos com sucesso");
                return (
                    console.log(obj),		    
                    updateDate()
		);
	 }
        const updateDate = e =>{
		navegar("/pagina4");
	}

	


	return (
		<container className="container-pg1">
			<div className="container-login">
				<div className="wrap-login">
					<form className="login-form">

						<header>
							<span className="login-form-title">
								<img src={photo} className="appImage" />
							</span>
						</header>




						<div className="wrap-input">
							<input
								className={name !== "" ? 'has-val input' : 'input'}
								type="name"
								value={inputUser}
								onChange={e => setName(e.target.value)} />
							<span className="focus-input" data-placeholder="">
								<img className="icon-passaword" src={iconPepople} />
							</span>
						</div>
						<div className="wrap-input">
							<input
								className={email !== "" ? 'has-val input' : 'input'}
								type="email"
								value={inputEmail}
								onChange={e => setEmail(e.target.value)} />
							<span className="focus-input" data-placeholder="">
								<img className="icon-email" src={iconEmail} />
							</span>
						</div>
						<div className="wrap-input">
							<input
								className={password !== "" ? 'has-val input' : 'input'}
								type="senha"
								value={password}
								onChange={e => setPassaword(e.target.value)} />
							<span className="focus-input" data-placeholder="Senha">
								<img className="icon-passaword" src={padlock} />
							</span>
						</div>
						<div className="wrap-input">
							<input
								className={phone !== "" ? 'has-val input' : 'input'}
								type="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)} />
							<span className="focus-input" data-placeholder="Telefone">
								<img className="icon-tel" src={iconTel} />
							</span>
						</div>
						<div>
							<select className='select' name='Nacionalidade' value={nationality}
							onChange={e => setNationality(e.target.value)} 
							>
								<option>Nacionalidade</option>
								<option value="brasileira">Brasileiro</option>
								<option value="africana">Africano</option>
								<option value="chines">Chines</option>
							</select>
						</div>
						<div className="container-login-form-btn-pg3">
							<button className="login-form-btn"
							value={botaoSalve}
							onClick={salveDate}
							>Salvar</button>
						</div>

					</form>
				</div>
			</div>
		</container>
	);


};
export default Pagina3;