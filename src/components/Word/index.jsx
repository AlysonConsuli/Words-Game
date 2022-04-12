import { useState } from 'react';
import { allWords } from '../../services/words';
import { WordFinished } from '../WordFinished';
import { Btns, List, Main } from './style';

export const Word = () => {
	const words = allWords().filter(function(el, i) {
		return allWords().indexOf(el) === i;
	});
	//console.log(words);

	const [word, setWord] = useState('');

	function changeWord(){
		setWord(words[Math.floor(Math.random() * words.length)]);
	}

	const [rights, setRights] = useState([]);
	const [wrongs, setWrongs] = useState([]);
	/*console.log(rights);
	console.log(wrongs);*/

	return(
		<Main>
			<header>
				<h1>When I Dream</h1>
			</header>
			<article>
				<h2>A palavra é: </h2>
				<span>{word}</span>
				{word === '' ?
					<button onClick={changeWord} >Start</button>
					:
					<button onClick={changeWord} >Pular Palavra</button>}
			</article>
			{word !== '' &&
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
			}
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
			<footer>
				<button onClick={() => {
					setWord('');
					setRights([]);
					setWrongs([]);
				}} >Restart</button>
			</footer>
		</Main>
	);
};