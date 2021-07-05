import styled from "styled-components"

const Logo = () => {
    const url = "https://ortex-static-files.s3.amazonaws.com/static/public/images/ortex_logo_v-white.svg"
    return <ImgWrapper><LogoImg alt="logo" src={url} /></ImgWrapper>
}

export default Logo

const LogoImg = styled.img`
    width: 3em;
`

const ImgWrapper = styled.div`
    overflow: hidden;
    height: 40px;
    width: 2em;
    padding: 0;
    margin-right: 0.5em;

`