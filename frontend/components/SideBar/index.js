import React from 'react';
import InputRange from 'react-input-range';
import { useState } from 'react';
import {
  SidebarContainer,
  Section,
  SectionTitle,
  Input,
  InputDetail,
  Label,
  InputContainer,
  Select,
  Option,
  FeaturesWrapper,
  FeaturesInput,
} from './styles';

function sideBar() {
  const [value, setValue] = useState(150000);
  return (
    <>
      <SidebarContainer>
        <Section>
          <SectionTitle>Preço</SectionTitle>
          <InputContainer>
            <InputRange
              value={value}
              maxValue={150000}
              min={50000}
              formatLabel={(value) => `R$${value}`}
              onChange={(value) => setValue(value)}
              name="Preço"
              step={3}
            />
          </InputContainer>
        </Section>
        <Section>
          <SectionTitle>Status</SectionTitle>
          <InputContainer>
            <Input
              type="radio"
              name="status"
              id=""
              value="new"
              checked="checked"
            />

            <Label>Nova</Label>
          </InputContainer>
          <InputContainer>
            <Input type="radio" name="status" value="used" id="" />
            <Label>Usada</Label>
          </InputContainer>
        </Section>

        <Section>
          <SectionTitle>Categoria</SectionTitle>
          <Select name="category" id="">
            <Option value="">Todos os imóveis</Option>
            <Option value="">Apartamento</Option>
            <Option value="">Casa</Option>
            <Option value="">Casa de condomínio</Option>
            <Option value="">Cobertura</Option>
            <Option value="">Flat</Option>
            <Option value="">Loft</Option>
            <Option value="">Terreno / Lote / Condomínio</Option>
          </Select>
        </Section>

        <Section>
          <SectionTitle>Banheiros</SectionTitle>
          <Select name="" id="">
            <Option value="">1</Option>
            <Option value="">2</Option>
            <Option value="">3</Option>
            <Option value="">4</Option>
          </Select>
        </Section>

        <Section>
          <SectionTitle>Quartos</SectionTitle>
          <Select name="" id="">
            <Option value="">1</Option>
            <Option value="">2</Option>
            <Option value="">3</Option>
            <Option value="">4</Option>
            <Option value="">5</Option>
          </Select>
        </Section>

        <Section>
          <SectionTitle>Recursos</SectionTitle>
          <FeaturesWrapper>
            <FeaturesInput>
              <InputDetail>
                <Input type="checkbox" name="garden" id="" value="garden" />
                <Label>Jardim</Label>
              </InputDetail>

              <InputDetail>
                <Input type="checkbox" name="garage" id="" value="garage" />
                <Label>Garagem</Label>
              </InputDetail>

              <InputDetail>
                <Input type="checkbox" name="balcony" id="" value="balcony" />
                <Label>Sacada</Label>
              </InputDetail>
            </FeaturesInput>

            <FeaturesInput>
              <InputDetail>
                <Input type="checkbox" name="air" id="" value="air" />
                <Label>Ar </Label>
              </InputDetail>

              <InputDetail>
                <Input type="checkbox" name="laundry" id="" value="laundry" />
                <Label>Lavanderia</Label>
              </InputDetail>

              <InputDetail>
                <Input type="checkbox" name="backwayd" id="" value="backyard" />
                <Label>Quintal</Label>
              </InputDetail>
            </FeaturesInput>
          </FeaturesWrapper>
        </Section>
      </SidebarContainer>
    </>
  );
}

export default sideBar;
