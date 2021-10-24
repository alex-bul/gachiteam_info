import React from 'react';
import PropTypes from 'prop-types';

import Vlad from '../img/vlad.jpg'
import Alex from '../img/alex.jpg'

import ReactPhoto from '../img/react.png'
import NodePhoto from '../img/node.png'
import TypeScriptPhoto from '../img/typescript.png'
import ExpressJs from '../img/Expressjs.png'




import { Panel, Header, Title, Group, Div, CardGrid, CardScroll, PanelHeader, Card, Avatar, Button, Text } from '@vkontakte/vkui';
import './Home.css'

const Home = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>
          Гачитим
        </PanelHeader>
		<Group>
			<Div>
				<Title level="1" weight="semibold"><p className='team_name'>Гачитим</p> - команда молодых разработчиков, готовая к амбициозным и большим проектам.</Title>
			</Div>
		</Group>

		<Group header={<Header>Наши технологии</Header>}>
		<CardScroll size="s">
		<Card mode="shadow" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'center', margin:5, overflow: 'hidden', width:'30vw'}}><img style={{width: '16vh'}} src={ReactPhoto}/></Card>

		<Card mode="shadow" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'center', margin:5, overflow: 'hidden', width:'30vw'}}><img style={{width: '13vh', height: '13vh'}} src={TypeScriptPhoto}/></Card>

		<Card mode="shadow" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'center', margin:5, overflow: 'hidden', width:'30vw'}}><img style={{width: '13vh'}} src={NodePhoto}/></Card>

		<Card mode="shadow" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'center', margin:5, overflow: 'hidden', width:'30vw'}}><img style={{width: '20vh', height: '6vh'}} src={ExpressJs}/></Card>
      </CardScroll>
		</Group>

		<Group header={<Header>Наша команда</Header>}>
		<CardGrid size='l' style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card  mode="shadow" className='card_men' style={{height:'50vh', overflow: 'hidden', width: '80vw'}}>
				<Div>
				<Avatar size='15vh' src={Vlad}/>
				<Title level="1" weight="semibold" >Владислав Шальнев</Title>
				<ul>
        <li><Text level="1" weight="semibold">Fullstack-разработчик</Text></li>
		<li><Text level="1" weight="semibold">TypeScript, React, NodeJS</Text></li>
        <li><Text level="1" weight="semibold">Победитель годовой премии ВКонтакте 2020</Text></li>



      </ul>
	  <Button size='l' stretched={true} href='https://vk.com/vladyoslav' target='_blank'>Страница VK</Button>

				</Div>

          	</Card>
            <Card  mode="shadow" className='card_men' style={{height:'50vh', overflow: 'hidden', width: '80vw'}}>
			<Div >

				<Avatar size='15vh' src={Alex}/>
				<Title level="1" weight="semibold">Бульбенков Александр</Title>
				<ul>
        <li><Text level="1" weight="semibold">Backend-разработчик</Text></li>
		<li><Text level="1" weight="semibold">Express, NodeJs, MongoDB</Text></li>
        <li><Text level="1" weight="semibold">Победитель конкурса FreshCode (3 волна)</Text></li>



      </ul>
	  <Button size='l' stretched={true} href='https://vk.com/a.bulbenkov' target='_blank'>Страница VK</Button>
	  </Div>
          	</Card>
          </CardGrid>
		</Group>


	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	
};

export default Home;
