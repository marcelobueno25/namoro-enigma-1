/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Box } from "@mui/material"; // Grid version 2
import { urso_niveis } from "../../db.js";
import "./styles.scss";

const PedidoNamoro = () => {
  const gerarAleatorio = (num) => Math.floor(Math.random() * num);
  const initRandom = {
    nv1: 0,
    nv2: 0,
    nv3: 0,
    nv4: 0,
    nv5: 0,
    nv6: 0,
  };
  const [countTentativa, setCountTentativa] = useState(0);
  const [emocao, setEmocao] = useState([]);
  const [emocaoRandom, setEmocaoRandom] = useState(initRandom);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setEmocaoRandom({
      nv1: gerarAleatorio(urso_niveis?.nv1?.length),
      nv2: gerarAleatorio(urso_niveis?.nv2?.length),
      nv3: gerarAleatorio(urso_niveis?.nv3?.length),
      nv4: gerarAleatorio(urso_niveis?.nv4?.length),
      nv5: gerarAleatorio(urso_niveis?.nv5?.length),
      nv6: gerarAleatorio(urso_niveis?.nv6?.length),
    });
  }, []);

  useEffect(() => {
    niveis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emocaoRandom]);

  const fuja = () => {
    let count = countTentativa + 1;
    setCountTentativa(count);
    niveis(count);
    const botaoNegativo = document.getElementById("nao");
    const x = Math.floor(
      Math.random() * (window.innerWidth - botaoNegativo.clientWidth)
    );
    const y = Math.floor(
      Math.random() * (window.innerHeight - botaoNegativo.clientHeight)
    );

    botaoNegativo.style.position = "absolute";
    botaoNegativo.style.left = `${x}px`;
    botaoNegativo.style.top = `${y}px`;
  };

  const niveis = (count) => {
    console.log(count);
    setEmocao(urso_niveis.nv1[emocaoRandom.nv1]);
    if (count >= 3 && count < 6) {
      setEmocao(urso_niveis.nv2[emocaoRandom.nv2]);
    }
    if (count >= 6 && count < 10) {
      setEmocao(urso_niveis.nv3[emocaoRandom.nv3]);
    }
    if (count >= 10 && count < 14) {
      setEmocao(urso_niveis.nv4[emocaoRandom.nv4]);
    }
    if (count >= 14 && count < 18) {
      setEmocao(urso_niveis.nv5[emocaoRandom.nv5]);
    }
    if (count >= 18) {
      setEmocao(urso_niveis.nv6[emocaoRandom.nv6]);
      setFinished(true);
    }
  };

  return (
    <div className={`layoutNamoro ${finished ? "bloqueio" : ""}`}>
      <div className="cardNamoro">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={12}>
            <Box textAlign="center">
              <h1>{emocao.title}</h1>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={emocao.img} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <h2>{emocao.message}</h2>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={6}>
                <Button
                  id="sim"
                  variant="contained"
                  href="https://www.youtube.com/watch?v=HqxhfRuTs8E"
                >
                  Sim
                </Button>
              </Grid>
              <Grid xs={6}>
                <Button
                  id="nao"
                  disabled={finished}
                  variant="contained"
                  onMouseOver={finished ? null : fuja}
                >
                  Não
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PedidoNamoro;
