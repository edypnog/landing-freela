import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Phone, MessageCircle } from "lucide-react";

// =====================================
// 🎨 MUDE APENAS A COR PRINCIPAL AQUI
// =====================================
const PRIMARY_COLOR = "#2563eb";

const theme = {
  primary: PRIMARY_COLOR,
  light: PRIMARY_COLOR + "15",
};

const WHATSAPP_NUMBER = "552181891097";
const WHATSAPP_MESSAGE = "Olá Ana Rute, gostaria de mais informações sobre atendimento de enfermagem.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #ffffff;
    color: #1f2937;
  }

  a {
    text-decoration: none;
  }
`;

const Hero = styled.section`
  position: relative;
  padding: 120px 20px 80px 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.light};
`;

const Cross = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ theme }) => theme.primary};
  opacity: 0.06;
  transform: rotate(45deg);
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Name = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.primary};
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #4b5563;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 40px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid ${({ theme }) => theme.primary};
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
    margin-top: 40px;
  }
`;

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionText = styled.p`
  margin-top: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #4b5563;
  line-height: 1.7;
  font-size: 17px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ServicesGrid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 35px;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  transition: 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 12px;
    font-size: 20px;
  }

  p {
    color: #6b7280;
    font-size: 15px;
  }
`;
const GalleryGrid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  color: #9ca3af;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  padding: 10px 22px;
  border-radius: 30px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export default function LandingPage() {

  const [showDiploma, setShowDiploma] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Hero>
        <Cross size={100} top="80px" left="60px" />
        <Cross size={160} top="250px" left="70%" />
        <Cross size={70} top="65%" left="30%" />

        <Container>
          <div>
            <Title><Name>Ana Rute Medeiros</Name><br/>Técnica de Enfermagem</Title>
            <Text>
              Técnica de enfermagem diplomada, com COREN ativo e ampla experiência
              em cuidados hospitalares e domiciliares.
            </Text>

            <ButtonGroup>
              <PrimaryButton href={whatsappLink} target="_blank">
                <MessageCircle size={18} /> WhatsApp
              </PrimaryButton>

              <SecondaryButton href="tel:5521981891097">
                <Phone size={18} /> Ligar Agora
              </SecondaryButton>
              <SecondaryButton as="button" onClick={() => setShowDiploma(true)}>
                Ver Diploma
              </SecondaryButton>
            </ButtonGroup>
          </div>

          <ProfileImage>
            <img
              src="/image.png"
              alt="Técnica de Enfermagem"
            />
          </ProfileImage>
        </Container>
      </Hero>

      <Section>
        <SectionTitle>Experiência e Compromisso</SectionTitle>
        <SectionText>
          Mais de 15 anos de atuação em hospitais, clínicas e atendimento domiciliar,
          oferecendo cuidado seguro, ético e humanizado para cada paciente.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Serviços</SectionTitle>
        <ServicesGrid>
          <Card>
            <h3>Cuidados Domiciliares</h3>
            <p>Assistência completa com foco no bem-estar e recuperação. *Disponibilidade para viagens.</p>
          </Card>
          <Card>
            <h3>Administração de Medicamentos</h3>
            <p>Aplicações seguras seguindo todos os protocolos profissionais.</p>
          </Card>
          <Card>
            <h3>Curativos e Pós-operatório</h3>
            <p>Acompanhamento cuidadoso e técnico com boas recomendações.</p>
          </Card>
        </ServicesGrid>
      </Section>

      <Section>
        <SectionTitle>Precisa de atendimento?</SectionTitle>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryButton href={whatsappLink}>
            Falar no WhatsApp
          </PrimaryButton>
          <SecondaryButton href={WHATSAPP_NUMBER}>
            Ligar Agora
          </SecondaryButton>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Galeria de Cuidados</SectionTitle>
        <SectionText>
          ** Registros autorizados pelas famílias, demonstrando dedicação,
          responsabilidade e privacidade.
        </SectionText>

        <GalleryGrid>
          <GalleryImage>
            <img src="/photo_1_2026-02-21_15-21-53.jpg" alt="Cuidado 1" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_2_2026-02-21_15-21-53.jpg" alt="Cuidado 2" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_3_2026-02-21_15-21-53.jpg" alt="Cuidado 3" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_4_2026-02-21_15-21-53.jpg" alt="Cuidado 4" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_5_2026-02-21_15-21-53.jpg" alt="Cuidado 5" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_6_2026-02-21_15-21-53.jpg" alt="Cuidado 6" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_7_2026-02-21_15-21-53.jpg" alt="Cuidado 7" />
          </GalleryImage>
          <GalleryImage>
            <img src="/photo_8_2026-02-21_15-21-53.jpg" alt="Cuidado 8" />
          </GalleryImage>
        </GalleryGrid>
      </Section>

      <Section>
        <SectionTitle>Entre em contato já!</SectionTitle>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryButton href={whatsappLink}>
            WhatsApp
          </PrimaryButton>
          <SecondaryButton href="tel:5521981891097">
            Ligar Agora
          </SecondaryButton>
        </ButtonGroup>
      </Section>

      {showDiploma && (
        <ModalOverlay onClick={() => setShowDiploma(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src="/photo_2026-02-21_16-00-49.jpg" alt="Diploma Técnica de Enfermagem" />
            <CloseButton onClick={() => setShowDiploma(false)}>
              Fechar
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer>
        © {new Date().getFullYear()} Ana Rute Medeiros | Técnica de Enfermagem | COREN Ativo
      </Footer>
    </ThemeProvider>
  );
}
