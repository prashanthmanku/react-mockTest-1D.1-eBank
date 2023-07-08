import styled from 'styled-components'

export const BgCard = styled.div`
  background-color: #152850;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`

export const WidthCard = styled.div`
  width: 90%;
  max-width: 850px;
  background-color: #e0eefe;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const Img = styled.img`
  width: 50%;
  max-width: 400px;
  padding-top: 20px;
`

export const FormCard = styled.form`
  background-color: #ffffff;
  width: 40%;
  //   margin: auto;
  border-radius: 20px;
  padding: 120px 20px;
  @media screen and (max-width: 767px) {
    padding: 20px 20px 40px 20px;
    width: 100%;
    margin-top: 20px;
  }
`

export const Heading = styled.h1`
  font-size: 23px;
  font-weight: 600;
  color: #183b56;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`

export const Label = styled.label`
  margin-bottom: 5px;
  color: #5a7184;
  font-size: 14px;
  font-weight: 500;
`

export const Input = styled.input`
  height: 35px;
  padding: 8px 16px;
  border: 1px solid #c3cad9;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  color: #183b56;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #1565d8;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
`
export const UserData = styled.p`
  color: white;
  font-size: 15px;
  line-height: 23px;
`
