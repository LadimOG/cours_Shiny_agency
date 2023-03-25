import React, { useState } from 'react'
import Card from '../components/Card'
import styled from 'styled-components'
import { useEffect } from 'react'
import { Loader } from '../utils/styles/Atoms'
import colors from '../utils/colors'



const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const ContainerFreelance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Freelance() {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [freelancersList, setFreelancersList] = useState([])

  useEffect(() => {
    async function fetchFreelance() {
      setIsDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const {freelancersList} = await response.json()
        setFreelancersList(freelancersList)
      } catch (error) {
        console.log(error);
      } finally{
        setIsDataLoading(false)
      }
      

    }
    fetchFreelance()
    
  }, [])
  return (
    <ContainerFreelance>
        <PageTitle>Trouver votre prestataire</PageTitle>
        <PageSubtitle >chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
              {isDataLoading ? (
                <Loader />
              ) : (
                
              <CardsContainer>
                {freelancersList.map((profile, index) => (
                  <Card
                      key={`${profile.name}-${index}`}
                      label={profile.job}
                      picture={profile.picture}
                      title={profile.name}
                  />
              ))}
              </CardsContainer>
              
            

              )}
    </ContainerFreelance>
  )
}

export default Freelance