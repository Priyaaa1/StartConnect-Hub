import {React,useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 8px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 8px;
  justify-content: left;
  padding: 0;
`;

const Licensing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Container>
      <Title>Licensing</Title>
      <Paragraph>Welcome to StartConnect Hub! This website is licensed under the MIT License. This page outlines the terms of the license and provides details on how you can use, modify, and distribute our software.</Paragraph>
      <Subtitle>MIT License</Subtitle>
      <Paragraph>Copyright (c) 2024 StartConnect-Hub</Paragraph>
      <Paragraph>
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
      </Paragraph>
      <Paragraph>
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
      </Paragraph>
      <Paragraph>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
      </Paragraph>
      <Subtitle>Contact Information</Subtitle>
      <p>If you have any questions or concerns about this licensing agreement, please contact us at Email: <a href="mailto:startconnecthub@gmail.com">startconnecthub@gmail.com</a> </p>

    </Container>
  );
};

export default Licensing;
