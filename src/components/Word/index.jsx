import { useState } from 'react';
import { allWords } from '../../services/words';
import { WordFinished } from '../WordFinished';
import { Btns, Footer, Header, List, Main } from './style';

export const Word = () => {
	const words = allWords().filter(function(el, i) {
		return allWords().indexOf(el) === i;
	});
	//const words = ['teste1', 'teste2', 'teste3'];
	//console.log(words);

	if(!localStorage.getItem('palavras')){
		const wordsSerialized = JSON.stringify(words);
		localStorage.setItem('palavras', wordsSerialized);
	}

	function resetStorage(){
		if(window.confirm('Tem certeza que deseja resetar todas as palavras?')){	
			const wordsSerialized = JSON.stringify(words);
			localStorage.setItem('palavras', wordsSerialized);
		}
	}

	const [word, setWord] = useState('');

	function changeWord(){
		const arrSerialized = localStorage.getItem('palavras');
		const wordsStorage = JSON.parse(arrSerialized);

		if(wordsStorage.length === 0){
			const wordsSerialized = JSON.stringify(words);
			localStorage.setItem('palavras', wordsSerialized);
			setWord('');
			setRights([]);
			setWrongs([]);
			return (
				alert('Estamos sem palavras no momento. Reniciando jogo e palavras...')
			);
		}

		if(word !== ''){
			const indice = wordsStorage.indexOf(word);
			wordsStorage.splice(indice, 1);
			const wordsSerialized = JSON.stringify(wordsStorage);
			localStorage.setItem('palavras', wordsSerialized);
		}

		setWord(wordsStorage[Math.floor(Math.random() * wordsStorage.length)]);
	}

	const [rights, setRights] = useState([]);
	const [wrongs, setWrongs] = useState([]);
	/*console.log(rights);
	console.log(wrongs);*/

	return(
		<>
			<Header>
				<h1 onClick={resetStorage} >When I Dream</h1>
			</Header>
			<Main word={word}>
				<article>
					<h2>A palavra é: </h2>
					<span>{word}</span>
					<button onClick={changeWord} >{word === '' ? 'Start' : 'Pular Palavra'}</button>
				</article>
				{word !== '' &&
				<>
					<Btns>
						<button onClick={() => {
							setRights([...rights, word]);
							changeWord();
						}} >Acertou!</button>
						<button onClick={() => {
							setWrongs([...wrongs, word]);
							changeWord();
						}} >Errou!</button>
					</Btns>
					<List>
						<div>
							<h3>Palavras certas: </h3>
							<ul>
								{rights.map((el,i) => <WordFinished key={i} el={el} />)}
							</ul>
						</div>
						<div>
							<h3>Palavras erradas: </h3>
							<ul>
								{wrongs.map((el,i) => <WordFinished key={i} el={el} />)}
							</ul>
						</div>
					</List>
				</>
				}
			</Main>
			<Footer>
				{word !== '' &&
				<button onClick={() => {
					setWord('');
					setRights([]);
					setWrongs([]);
				}} >Restart</button>
				}
			</Footer>
		</>
	);
};