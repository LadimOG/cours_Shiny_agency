import { useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../utils/styles/Atoms'
import styled from 'styled-components'
import colors from '../utils/colors'
import { SurveyContext } from '../utils/context/index'
import {useFetch} from '../utils/hooks'

const ContainerQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const questionPrevious = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const questionNext = questionNumberInt + 1

  const { answers, saveAnswers } = useContext(SurveyContext)
  const {data, isLoading, error} = useFetch(`http://localhost:8000/survey`)
  const {surveyData} = data
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  if(error) {
    return <span style={{color: "red", textAlign: 'center', fontWeight: "bold", padding: "100px"}}>il y a un probleme !!!</span>
  }

  return (
    <ContainerQuestion>
      <h1>Question{questionNumber}</h1>
      {surveyData && surveyData[questionNumber]}
      {isLoading ? <Loader /> : <h2>{data[questionNumber]}</h2>}
      <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${questionPrevious}`}>précédent</Link>
        {data[questionNumberInt + 1] ? (
          <Link to={`/survey/${questionNext}`}>suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </ContainerQuestion>
  )
}

export default Survey
