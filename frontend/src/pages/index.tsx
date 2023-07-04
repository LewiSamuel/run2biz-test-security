import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Card, Alert, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import R2B from '../Run2BizTest';

export default function Home() {

  const [page, setPage] = useState('senha');
  const [password, setPassword] = useState("");
  const [instrucoes, setInstrucoes] = useState([]);
  const [arquivoComando, setArquivoComando] = useState<File>();
  const [feedback, setFeedBack] = useState<any>({ status: "", message: [] });

  useEffect(() => {


  }, []);

  const getSubmitValidPassword = async function (e: any) {
    e.preventDefault();
    let resultValidPassword:any = await R2B.Password.validPassword(password);

    setFeedBack({status: resultValidPassword.valid ? "success" : "ERROR",
    message: resultValidPassword.erro.length > 0 ? resultValidPassword.erro : ["Senha válida!"]})
  }

  const getSubmitProcessAddress = async function (e:any){
    e.preventDefault();

    if(arquivoComando){
      let resultadoEnderecoDecifrado = await R2B.Address.getAddress(arquivoComando)
      setInstrucoes(resultadoEnderecoDecifrado.instrucoes)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center mb-5 vh-100">
        <Col sm={12} md={6} lg={6}>
          <Card>
            <Card.Body className="p-5">

              <Row>

                <Col sm={12} className="d-flex justify-content-center mb-3">
                    <Button
                      variant='outline-info'
                      onClick={() => setPage("senha")}
                      className="w-100"
                      type="button">
                      Questão 1 - Senha
                    </Button>
                    <Button
                      variant='outline-info'
                      onClick={() => setPage("endereco")}
                      className="w-100"
                      type="button">
                      Questão 2 - Endereço
                    </Button>
                </Col>


                <Col sm={12} className="d-flex justify-content-center">
                  <img src="/favicon.png" width={100} />
                </Col>




                {page === "senha" && <Form onSubmit={getSubmitValidPassword}>
                  <Col sm={12} className="text-center">
                    <b>Teste de Senha numérica</b>
                  </Col>

                  <Col sm={12}>
                    {feedback.message.map((msgErro:string) =>  
                      <Alert
                        variant={feedback.status === "ERROR" ? "danger" : "success"}
                        key={msgErro}>
                        {msgErro}
                      </Alert>)}
                  </Col>


                  <Col sm={12} className="mt-2">
                    <Form.Label htmlFor="inputPassword">Validar Senha</Form.Label>
                    <Form.Control
                      type="text"
                      className="pb-2"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="inputPassword"
                      name='password'
                      placeholder="223456"
                    />
                  </Col>

                  <Col sm={12} className="d-flex justify-content-center mt-2">
                    <Button className="w-100" type="submit">Login</Button>
                  </Col>
                </Form>}


                {page === "endereco" && <Form onSubmit={getSubmitProcessAddress}>
                  <Col sm={12} className="text-center">
                    <b>Decifrar endereço</b>
                  </Col>

                  <Col sm={12} className="mt-2">
                    <Form.Label htmlFor="inputCommands">Comandos.txt</Form.Label>
                    <Form.Control
                      type="file"
                      className="pb-2"
                      onChange={(e:any) => setArquivoComando(e.target.files[0])}
                      id="inputCommands"
                      name='commands'
                    />
                  </Col>

                  <Col sm={12} className="d-flex justify-content-center mt-2">
                    <Button className="w-100" type="submit">Validar</Button>
                  </Col>

                  <Col sm={12}>
                    <textarea
                    style={{height: '300px'}}
                    className='w-100 mt-2'
                    value={instrucoes.map((instrucao, index) => `[${index + 1}] - ${instrucao}`).join("\n")}
                    disabled>
                    </textarea>
                  </Col>
                </Form>}



              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}