import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Container } from "../../components/Container";
import { MessageBalloon } from "../../hooks/Message";
import spaceVideo from "../../assets/spacevideo.mp4";
import * as S from "./style";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

export const Painel = () => {
  const { user, VerifyToken } = useContext(AuthContext);

  useEffect(() => {
    VerifyToken();
  }, []);

  return (
    <>
      {user && (
        <Container>
          <S.styleDiv>
            <S.styledCard>
              <S.styledTitle>Atualizações do painel</S.styledTitle>
              <Accordion
                sx={{
                  maxWidth: "500px",
                  border: "1px solid #ffffff",
                  backgroundColor: "#1c1c1c",
                }}
              >
                <AccordionSummary
                  sx={{ color: "#fff", fontFamily: "Montserrat" }}
                >
                  {" "}
                  Versão inicial - 0.0.0
                </AccordionSummary>
                <AccordionDetails
                  sx={{ color: "#fff", fontFamily: "Montserrat" }}
                >
                  A versão preliminar compreende a implementação da estrutura
                  inicial do website, contemplando as funcionalidades
                  elementares de criação de postagens, inserção de conteúdo nas
                  postagens (seja imagem ou texto), além da possibilidade de
                  salvar as postagens sem publicá-las. Ademais, a referida
                  versão permite a edição, visualização e consulta das
                  informações dos usuários e administradores, bem como a
                  visualização do perfil do usuário. Contudo, em virtude de se
                  tratar apenas de uma versão inicial, é possível que ocorram
                  inconsistências (bugs).
                </AccordionDetails>
              </Accordion>
            </S.styledCard>
            <video autoPlay loop muted src={spaceVideo}></video>
          </S.styleDiv>
        </Container>
      )}
    </>
  );
};
