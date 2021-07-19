import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';
export default function App(props){
  const [erro, setErro] = useState(false);
  const history = useHistory();
  const [ usuario, setUsuario] = useState('');
  function handlePesquisa(){
axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repository)=>{
      repositoriesName.push(repository.name);
    })
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
    history.push('/repositories');
})
.catch(err =>{
  setErro(true);
});
  }
  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input className="usuarioInput" placeholder="nome" value={usuario} onChange={e=> setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
      {erro ? <S.ErroMsg>Ocorreu um erro.</S.ErroMsg> : ''};
    </S.HomeContainer>

  );
 }