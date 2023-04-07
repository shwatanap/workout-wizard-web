import { Workout } from '@/types/workout';

export const dummyproceedureData: Array<Workout> = [
    {
        section: '①条件指定',
        img: '/img/1.png',
        explain: 'お店の候補をめるために,お店の数を絞るための条件指定をする.'
    },
    {
        section: '②候補確認',
        img: '/img/2.png',
        explain: '投票を行うお店を10個ほど選択する.このとき選択したものの中から投票を行う.',
    },
    {
        section: '③投票フォーム用URLの発行',
        img: '/img/3.png',
        explain: '投票を行うためのURLが表示されます.このURLを,投票を行うメンバーに送って投票をしてもらいます.',
    },
    {
        section: '④投票',
        img: '/img/4.png',
        explain: '各個人で、URLを踏んで投票ページに移動し投票をする.',
    },
    {
        section: '⑤結果発表',
        img: '/img/5.png',
        explain: '全員が投票し終わると,投票結果上位3つが表示されます.行きたいお店のボタンをおしてナビを開始します.',
    },
];