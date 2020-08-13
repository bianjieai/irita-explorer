export const ExplorerLang = {
    common:{
        allTxStatus:'所有交易状态',
        success:'成功',
        failed:'失败',
        allTxType:'所有交易类型',
        selectDate:'选择日期',
    },
    table:{
        emptyDescription:'- 暂时没有内容 -',
        block: '区块高度',
        transactions: '交易数量',
        timestamp: '参考时间',
        age: '参考块龄',
        txHash: '交易哈希',
        txType: '交易类型',
        from: '发送者',
        to: '接收者',
        signer: '签名者',
        txTimestamp: '交易时间',
        requestId: '请求标识',
        number:'#',
        name: '节点名称',
        operator: '操作地址',
        votingPower: '权重',
        pubKey: '公钥',
        denom: '数据类别',
        owner: '拥有者',
        id: '数据标识',
        data: '链上数据',
        uri: '链外链接',
        serviceName: '服务类型',
        provider:'提供者',
        respondTimes:'响应次数',
        isAvailable:'是否可用',
        price:'单次调用价格',
        minBlock:'最小响应时间',
        bindTime:'绑定时间',
        disabledTime: '解绑时间',
        respondHash:'响应哈希',
        consumer:'消费者',
        requestHash:'请求哈希',
        requestStatus:'请求状态',
        deposit: '绑定押金',
    },
    unit:{
        providers:'providers',
        time:'次',
        blocks:'blocks',
        totalRespond:'共${%value%}条回复',
        Txs:'Txs',
        second:'秒',
    },
    message:{
        txListFailed:'数据获取失败,请稍后重试',
        txTypeFailed:'数据获取失败,请稍后重试',
        serviceInfoFailed:'数据获取失败,请稍后重试',
        serviceBindFailed:'数据获取失败,请稍后重试',
        serviceListFailed:'数据获取失败,请稍后重试',
        serviceTxListFailed:'数据获取失败,请稍后重试',
        txInfoFailed:'数据获取失败,请稍后重试',
        callServiceListFailed:'数据获取失败,请稍后重试',
        respondRecordFailed:'数据获取失败,请稍后重试',
        providerServiceListFailed:'数据获取失败,请稍后重试',
    },
    Navigation:{
        block: '区块浏览',
        transactions: '交易浏览',
        validators: '共识节点',
        nftAsset: '数据对象',
        service: '服务浏览',
        searchPlaceHolder: '请输入地址/交易哈希/区块高度进行搜索',
    },
    home:{
        blockHeight: '最新区块',
        transactions: '交易数量',
        avgBlockTime: '平均出块时间',
        last100Blocs: '最近100块',
        validators: '共识节点数',
        services: '服务数量',
        assets: '数据对象',
        blocks: '最近区块',
        viewAll: '查看全部',
        listTransactions: '最近交易',
    },
    block:{
        currentHeight: '当前区块',
    },
    blockDetail:{
        blockHash: '区块摘要:',
        transaction: '交易数量:',
        timestamp: '参考时间:',
        transactions: '区块交易',
    },
    transactions:{
        txs: '交易',
        search: '搜索',
        status: '交易状态',
    },
    validators:{
        bonded:'共识中',
        unbonding:'候选中',
        unbonded:'待解禁',
    },
    nftAsset:{
        assets: '数据对象',
        search: '搜索',
        placeHolder: '搜索数据标识',
    },
    service: {
        services: '服务列表',
        from: '创建者',
        description: '描述',
        status: '服务状态',
        placeHolder:'搜索服务名称或描述',
    },
    transactionInformation:{
        transactionInformation: '交易详情',
        baseInfo:'基础消息',
        txHash: '交易哈希：',
        blockHeight: '区块高度：',
        status: '交易状态：',
        timestamp: '参考时间：',
        signer: '签名者：',
        memo: '备注：',
        transactionMessage: '交易消息',
        relevanceTx:'关联交易',
        txType: '交易类型',
        denom: '数据类别：',
        from: '发送者：',
        to: '接收者：',
        consumer: '服务消费者：',
        provider: '服务提供者：',
        repeatedFrequency: '重复调用频率：',
        repeatedTotal: '重复调用总数：',
        serviceFeeCap: '服务费用：',
        timeOut: '超时时间：',
        serviceName: '服务类型：',
        requestContextId: '请求标识：',
        pricing: '单次调用价格：',
        owner: '拥有者：',
        qos: '最小响应时间：',
        deposit: '绑定押金：',
        id: '数据标识：',
        data: '链上数据：',
        uri: '链外链接：',
        issueDenom:{
            schema: '上链结构：',
            sender: '创建者：',
        },
        send:{
            amount: '数量：',
        },
        createRecord:{
            contents:'内容：',
        },
        callService: {
            input: '输入内容：',
            repeated: '是否重复调用：',
            superMode: '超级模式：',
        },
        respondService:{
            output: '输出内容：',
            requestId: '请求标识：',
            result: '响应结果：',
        },
        defineService: {
            description: '描述：',
            tags: '标签：',
            author: '服务创建者：',
            authorDescription: '创建者简介：',
            schemas:'接口规范：',
        },
    },
    addressDetail: {
        addressDetail:'地址详情',
        txRecord:'交易记录',
        consumerTitle:'服务调用-作为消费者',
        providerTitle:'服务调用-作为提供者',
        respondRecord:'响应记录',
        assets: '数据对象',
    },
    nftDetail: {
        nftInformation: '数据对象详情',
        owner: '拥有者：',
        denom: '数据类别：',
        id: '数据标识：',
        schema: '上链结构：',
        data: '链上数据：',
        creator: '创建者：',
        uri: '链外链接：',
        nftTxs: '交易记录',
    },
    serviceDetail: {
        serviceDefinition: '服务详情',
        primary: '基础信息',
        author: '创建者：',
        authorDescription: '创建者描述：',
        description: '服务描述：',
        name: '名称：',
        schema: '上链结构：',
        tags: '标签：',
        serviceBindings: {
            serviceBindings: '服务绑定',
            providers: '服务提供者',
            deposit: '绑定押金',
            owner: '拥有者',
            pricing: '单次调用价格',
            qos: '最小响应时间',
            bindTime: '绑定时间',
            disabledTime: '解绑时间',
            hash:'绑定哈希',
        },
        serviceTransactions: '交易记录',
        hash:'定义详情',
        height:'定义区块',
        time:'定义时间',
        respondRecord:'服务响应记录',
        provider:'提供者',
        txRecord:'响应记录',
    },
    searchResult:{
        title: '搜索结果',
        backHome: '返回首页',
        resultTitle: '搜索结果为空',
        searchTip: '尝试搜索交易哈希或区块高度',
    },
}