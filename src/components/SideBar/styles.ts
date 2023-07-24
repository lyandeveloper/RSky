import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  top: 0;
  width: 300px;
  height: 100vh;
  position: sticky;
  box-shadow: 3px 0px 8px 0px rgba(204, 204, 204, 1);
  background: #fff;
`;
export const Section = styled.section`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;
export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  padding: 0 20px;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;
export const InputDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 13px;
  margin-left: 5px;
  font-weight: lighter;
`;
export const InputContainer = styled.div`
  padding: 0 50px 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Select = styled.select`
  margin-left: 20px;
  outline: 0;
`;
export const Option = styled.option``;
export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
`;
export const FeaturesInput = styled.div``;
