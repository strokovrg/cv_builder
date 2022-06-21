import React from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'

import './main.scss';

// components:
import { Avatar, Range, Title, Descr } from '../components'

// icons:
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg'
import { ReactComponent as PrintIcon } from '../assets/icons/print.svg'

// ToDo app:
import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

import './main.scss';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div className='ExportPDF, center-align'>
                Export to PDF
            </div>
        );
    }
}


const CV = () => {
    const [skillsCounter, setSkillsCounter] = React.useState(1)
    const [worksCounter, setWorksCounter] = React.useState(1)

    const componentRef = React.useRef()
    const handlePrintClick = useReactToPrint({
        content: () => componentRef.current,
    })

    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
            )
        ])
    }

    return (
        <>
            <div className='PrintButton, center-align'>
                <ComponentToPrint ref={componentRef} />
                <button onClick={handlePrintClick}>
                    <PrintIcon style={{ marginRight: '0.6rem' }} />
                    PRINT
                </button>
            </div>
            <div className='ui-content-wrapper' >
                <Wrapper>
                    <div className='ui-container' ref={componentRef}>
                        <Row itemsCenter>
                            <Sidebar>
                                <Avatar />
                            </Sidebar>
                            <Content>
                                <Title>Nick Gerner</Title>
                                <Descr>
                                    Experienced Software & Machine Learning Engineer with a
                                    demonstrated history.
                                </Descr>
                            </Content>
                        </Row>

                        <Row>
                            <Sidebar>
                                <Title size='3' isUppercase>
                                    About me:
                                </Title>
                                <Descr>Software Engineer</Descr>
                                <Descr isSecondary>Moscow, RU</Descr>

                                <Descr isPrimary style={{ marginTop: '2rem' }}>
                                    <MailIcon style={{ marginRight: '0.6rem' }} />
                                    nick@gmail.com
                                </Descr>
                                <Descr isPrimary>
                                    <PhoneIcon style={{ marginRight: '0.6rem' }} />
                                    +1 588-6500
                                </Descr>
                            </Sidebar>

                            <Content>
                                <Title size='3' isUppercase>
                                    Education:
                                </Title>
                                <Descr>RTU MIREA - Software Engineering</Descr>

                                <Title
                                    size='3'
                                    isUppercase
                                    isShowButton
                                    onClick={() => setWorksCounter(worksCounter + 1)}
                                    style={{ marginTop: '3.6rem' }}
                                >
                                    <div className="App">
                                        <header>
                                            <h1>Work experience: {todos.length}</h1>
                                        </header>
                                        <ToDoForm addTask={addTask} />
                                        {todos.map((todo) => {
                                            return (
                                                <ToDo
                                                    todo={todo}
                                                    key={todo.id}
                                                    toggleTask={handleToggle}
                                                    removeTask={removeTask}
                                                />
                                            )
                                        })}
                                    </div>
                                </Title>

                                <Title
                                    size='3'
                                    isUppercase
                                    isShowButton
                                    onClick={() => setSkillsCounter(skillsCounter + 1)}
                                    style={{ marginTop: '3rem' }}
                                >

                                    <div className="App">
                                        <header>
                                            <h1>Skills: {todos.length}</h1>
                                        </header>
                                        <ToDoForm addTask={addTask} />
                                        {todos.map((todo) => {
                                            return (
                                                <ToDo
                                                    todo={todo}
                                                    key={todo.id}
                                                    toggleTask={handleToggle}
                                                    removeTask={removeTask}
                                                />
                                            )
                                        })}
                                    </div>
                                </Title>
                            </Content>
                        </Row>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export { CV }