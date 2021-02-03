import React from 'react';

import styled from 'styled-components';

const Content = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    box-sizing: border-box;
`;

const ContentItem = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Read';
    width: 250px;
    padding: 10px;
    background-color: #599;
    box-sizing: border-box;
    margin: 40px;
`;


export default function content() {

    return (
        <Content>
            <ContentItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nunc, 
            tincidunt quis rhoncus quis, posuere non dolor. Curabitur lobortis ipsum a quam congue viverra. 
            Aliquam mattis, ex eget ullamcorper rutrum, odio nisl dictum magna, finibus pharetra felis dui eu enim. 
            Donec faucibus metus nulla, vel molestie lacus lobortis id. Nam commodo arcu sed enim mattis luctus. 
            In nibh eros, efficitur eget sodales ac, viverra vel diam. Donec magna diam, vehicula vel dignissim eu, 
            finibus sit amet urna. Cras aliquet est semper, aliquam nulla id, aliquet magna. Suspendisse a pellentesque 
            neque. Phasellus tempus elit eu neque convallis, ut efficitur diam consectetur. Duis commodo, lectus a 
            aliquam finibus, velit lorem ornare erat, a fringilla dui lectus a lorem. Nullam eu tempor felis. Sed in 
            consequat quam, sed euismod arcu. Duis volutpat elit sed nibh convallis feugiat.
            </ContentItem>
            <ContentItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nunc, 
            tincidunt quis rhoncus quis, posuere non dolor. Curabitur lobortis ipsum a quam congue viverra. 
            Aliquam mattis, ex eget ullamcorper rutrum, odio nisl dictum magna, finibus pharetra felis dui eu enim. 
            Donec faucibus metus nulla, vel molestie lacus lobortis id. Nam commodo arcu sed enim mattis luctus. 
            In nibh eros, efficitur eget sodales ac, viverra vel diam. Donec magna diam, vehicula vel dignissim eu, 
            finibus sit amet urna. Cras aliquet est semper, aliquam nulla id, aliquet magna. Suspendisse a pellentesque 
            neque. Phasellus tempus elit eu neque convallis, ut efficitur diam consectetur. Duis commodo, lectus a 
            aliquam finibus, velit lorem ornare erat, a fringilla dui lectus a lorem. Nullam eu tempor felis. Sed in 
            consequat quam, sed euismod arcu. Duis volutpat elit sed nibh convallis feugiat.
            </ContentItem>
            <ContentItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nunc, 
            tincidunt quis rhoncus quis, posuere non dolor. Curabitur lobortis ipsum a quam congue viverra. 
            Aliquam mattis, ex eget ullamcorper rutrum, odio nisl dictum magna, finibus pharetra felis dui eu enim. 
            Donec faucibus metus nulla, vel molestie lacus lobortis id. Nam commodo arcu sed enim mattis luctus. 
            In nibh eros, efficitur eget sodales ac, viverra vel diam. Donec magna diam, vehicula vel dignissim eu, 
            finibus sit amet urna. Cras aliquet est semper, aliquam nulla id, aliquet magna. Suspendisse a pellentesque 
            neque. Phasellus tempus elit eu neque convallis, ut efficitur diam consectetur. Duis commodo, lectus a 
            aliquam finibus, velit lorem ornare erat, a fringilla dui lectus a lorem. Nullam eu tempor felis. Sed in 
            consequat quam, sed euismod arcu. Duis volutpat elit sed nibh convallis feugiat.
            </ContentItem>
        </Content>
    );
};