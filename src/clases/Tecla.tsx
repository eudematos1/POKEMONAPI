import React from 'react';
import { Button, Flex } from 'antd';

const Tecla: React.FC = () => (
  <Flex gap="small" wrap="wrap">
    <Button style={{width:"180px"}}>Descartar</Button>
    <Button type="primary" style={{width:"180px"}}>Usar</Button>
  </Flex>
);

export default Tecla;