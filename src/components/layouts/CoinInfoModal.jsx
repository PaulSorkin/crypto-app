import React from 'react';
import {Divider, Flex, Tag, Typography} from "antd";
import {RedditCircleFilled, TwitterCircleFilled} from "@ant-design/icons";

const CoinInfoModal = ({coin}) => {
    return (
        <>
            <Flex align="center">
                <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 10}}/>
                <Typography.Title level={2} style={{margin: 0}} >({coin.symbol}) {coin.name}</Typography.Title>
            </Flex>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>

                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>

                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong >Price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong >Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong >Market Capitalization: </Typography.Text>
                {coin.marketCap.toFixed(2)}$
            </Typography.Paragraph>
            {coin.contractAddress && <Typography.Paragraph>
                <Typography.Text strong >Contract Adress: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>}
            <Typography.Paragraph>
                <Flex align={"center"} gap={30}>
                    <Typography.Link strong href={coin.websiteUrl} target={"_blank"} >Visit Web Site</Typography.Link>
                    <a href={coin.twitterUrl} target={"_blank"}><TwitterCircleFilled style={{fontSize: 30, color: 'blue'}}/></a>
                    <a href={coin.redditUrl} target={"_blank"}><RedditCircleFilled style={{fontSize: 30, color: 'orange'}} /></a>
                </Flex>
            </Typography.Paragraph>
        </>
    )
}

export default CoinInfoModal;