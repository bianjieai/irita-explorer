export const ExplorerLang = {
    common:{
        allTxStatus:'全部交易状态',
        success:'成功',
        failed:'失败',
        allTxType:'全部交易类型',
        selectDate:'选择日期',
        copied:'已复制',
        copyFailed:'复制失败',
        all:'全部',
        more:'展开',
        fewer:'收起',
    },
    table:{
        emptyDescription:'- 暂时没有内容 -',
        block: '区块高度',
        transactions: '交易数量',
        timestamp: '参考时间',
        age: '参考块龄',
        txHash: '交易哈希',
        txType: '交易类型',
        message:'交易消息',
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
        denomId: '数据类别标识',
        owner: '拥有者',
        tokenName: '数据对象',
        tokenId: '数据对象标识',
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
        createHash:'创建哈希',
        nftCount:'数据对象',
        creator:'创建者',
        createTime:'创建时间',
        identity:'身份ID',
        idPubkey:'身份公钥',
        pubKeyAlgo:'公钥算法',
        certificate:'证书',
        credentials: '身份凭证',
        updateTime:'更新时间',
        // 新增 全局表格中的表头
        commission: 'Commission',
        bondedTokens: 'Bonded_Tokens',
        uptime: 'Uptime',
        selfBonded: 'Self-Bonded',
        delegators: 'Delegators',
        bondHeight: 'Bond_Height',
        unbondingHeight: 'Unbonding_Height', // 新增
        address: 'Address',
        amount: 'Amount',
        shares: 'Shares',
        endTime: 'End Time',
        fee: 'Fee',
        status: 'Status',
        consensusAddress: 'Consensus Address',
        proposerPriority: 'Proposer Priority',
    },
    unit:{
        ellipsis:' ,...',
        msgCountUnit:'条',
        providers:'providers',
        time:'次',
        blocks:'blocks',
        totalRespond:'共 ${%value%} 条回复',
        Txs:'Txs',
        second:'秒',
    },
    message:{
        requestFailed:'数据获取失败,请稍后重试',
    },
    Navigation:{
        block: '区块浏览',
        transactions: '交易浏览',
        validators: '共识节点',
        nftAsset: '数据对象',
        denoms: '数据类别',
        service: '服务浏览',
        searchPlaceHolder: '请输入地址/交易哈希/区块高度进行搜索',
        network:'Network'
    },
    home:{
        blockHeight: '最新区块',
        transactions: '交易数量',
        avgBlockTime: '平均出块时间',
        last100Blocs: '最近100块',
        validators: '共识节点数',
        services: '服务数量',
        denoms:'数据类别数量',
        assets: '数据对象数量',
        identities: '身份 ID 数量',
        blocks: '最近区块',
        viewAll: '查看全部',
        listTransactions: '最近交易',
        tx:'交易#',
        txn:'交易数量'
    },
    block:{
        currentHeight: '当前区块',
    },
    blockDetail:{
        blockHash: '区块摘要:',
        transaction: '交易数量:',
        timestamp: '参考时间:',
        transactions: '区块交易',
        // 新增
        proposer: 'Proposer:',
        validators: 'Validators:',
        votingPower: 'Voting Power:',
        inflation: 'Inflation:',
        validatorSet:'Validator Set'
    },
    transactions:{
        txs: '交易',
        search: '搜索',
        status: '交易状态',
        // 新增
        delegationTxsList: 'Delegation Txs List',
        validationTxsList: 'Validation Txs List'
    },
    validators:{
        bonded:'共识中',
        unbonding:'候选中',
        unbonded:'待解禁',
    },
    nftAsset:{
        assets: '数据对象',
        search: '搜索',
        placeHolder: '搜索数据对象标识或数据对象',
    },
    denom:{
        title: '数据类别',
        search: '搜索',
        placeHolder: '搜索数据类别或数据类别标识',
    },
    identityList:{
        title: '身份',
        search: '搜索',
        placeHolder: '搜索身份ID/拥有者',
    },
    identityDetail:{
        title: '身份详情',
        baseInfo: '基本信息',
        credentialsInfo: '凭证信息',
        txRecord: '交易记录',
        owner: '拥有者',
        credentials: '身份凭证',
        createTxHash: '创建交易',
        createHeight: '创建区块',
        createTime: '创建时间',
    },
    service: {
        services: '服务',
        from: '创建者',
        description: '描述',
        status: '服务状态',
        placeHolder:'搜索服务类型或描述',
        serviceCount:'个服务',
    },
    transactionInformation:{
        transactionInformation: '交易详情',
        baseInfo:'基础消息',
        txHash: '交易哈希',
        blockHeight: '区块高度',
        status: '交易状态',
        timestamp: '参考时间',
        signer: '签名者',
        memo: '备注',
        // transactionMessage: '交易消息',
        relevanceTx:'关联交易',
        txType: '交易类型',
        denomId: '数据类别标识',
        denomName: '数据类别',
        from: '发送者',
        to: '接收者',
        consumer: '服务消费者',
        provider: '服务提供者',
        repeatedFrequency: '重复调用频率',
        repeatedTotal: '重复调用总数',
        serviceFeeCap: '服务费用',
        timeOut: '超时时间',
        serviceName: '服务类型',
        requestContextId: '请求标识',
        pricing: '单次调用价格',
        owner: '拥有者',
        qos: '最小响应时间',
        deposit: '绑定押金',
        nftId: '数据对象标识',
        nftName: '数据对象',
        data: '链上数据',
        uri: '链外链接',
        fee: 'Fee',
        gasUsed:'Gas Used',
        issueDenom:{
            schema: '上链结构',
            sender: '创建者',
        },
        send:{
            amount: '数量',
        },
        createRecord:{
            contents:'内容',
        },
        callService: {
            input: '输入内容',
            repeated: '是否重复调用',
            superMode: '超级模式',
        },
        respondService:{
            output: '输出内容',
            requestId: '请求标识',
            result: '响应结果',
        },
        defineService: {
            description: '描述',
            tags: '标签',
            author: '服务创建者',
            authorDescription: '创建者简介',
            schemas:'接口规范',
        },
        identity:{
            id:'身份ID',
            pubkey:'身份公钥',
            certificate:'证书',
            credentials:'身份凭证',
            pubKeyAlgo:'公钥算法'
        },
        recvPacket:{
            packet:'跨链数据包',
            proof:'证明信息',
            proofHeight:'证明高度',
            proofPath:'证明路径',
            proofData:'证明数据',
            clientID:'客户端ID',
            module:'模块',
        },
        client:{
            clientID:'客户端ID',
            header:'区块头',
        },
        // 新增
        transactionInformations: {
            title: 'Transaction Information',
            block: 'Block',
            status: 'Status',
            timestamp: 'Timestamp',
            fee: 'Fee',
            gasUsed: 'Gas Used',
            signer: 'Signer',
            memo:'Memo'
        },
        transactionMessage: {
            title: 'Transaction Message or Result',
            TxType: 'TxType :',
            from: 'From :',
            amount: 'Amount :',
            to: 'To :',
            shares: 'Shares :',
            toShares: 'Shares : ',//'Shares : '此处有空格
            endTime: 'End Time :',
            withdrawAddress: 'Withdraw Address:',
            delegatorAddress: 'Delegator Address :',
            operatorAddress: 'Operator Address :',
            moniker: 'Moniker :',
            identity: 'Identity :',
            selfBonded: 'Self-Bonded :',
            ownerAddress:'Owner Address :',
            consensusPubkey: 'Consensus Pubkey :',
            commissionRate: 'Commission Rate :',
            website: 'Website :',
            details: 'Details :',
            // 新的交易类型展示
            isBuyOrder: 'isBuyOrder :',
            inputAddress: 'Input Address :',
            Input: 'Input :',
            outputAddress: 'Output Address :',
            output: 'Output :',
            deadline: 'Deadline :',
            sender: 'Sender :',
            exactIrisAmt: 'Exact Iris Amt :',
            minIrisAmt: 'Min Iris Amt :',
            maxToken: 'Max Token :',
            minToken: 'Min Token :',
            minLiquidity: 'Min Liquidity :',
            withdrawLiquidity: 'Withdraw Liquidity :',
            depositor: 'Depositor :',
            validator: 'Validator: '
        }
    },
    addressDetail: {
        addressDetail:'地址详情',
        txRecord:'交易记录',
        consumerTitle:'服务调用-作为消费者',
        providerTitle:'服务调用-作为提供者',
        respondRecord:'响应记录',
        assets: '数据对象',
        identities:'身份列表'
    },
    nftDetail: {
        nftInformation: '数据对象详情',
        owner: '拥有者',
        denom: '数据类别',
        tokenName:'数据对象',
        tokenId: '数据对象标识',
        schema: '上链结构',
        data: '链上数据',
        creator: '创建者',
        uri: '链外链接',
        nftTxs: '交易记录',
    },
    serviceDetail: {
        serviceDefinition: '服务详情',
        primary: '基础信息',
        author: '创建者',
        authorDescription: '创建者描述',
        description: '服务描述',
        name: '名称',
        schema: '上链结构',
        tags: '标签',
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
        hash:'创建详情',
        height:'创建区块',
        time:'创建时间',
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
    // 新增
    // 验证人列表
    staking: {
        title: 'Validator List',
        status:{
            active:'Active',
            candidate:'Candidate',
            jailed:'Jailed',
        }
    },
    // 验证人详情
    validatorDetail: {
        title: 'Validator Details',
        validatorInformation: {
            validatorTip: 'The validator has no more information',
            operatorAddressTip: 'The address you used to Create a Validator , Delegate or Withdraw DelegatorReward, etc.',
            validationAssetInfoArr: {
                operatorAddress: 'Operator Address:',
                ownerAddress: 'Owner Address:',
                withdrawAddress: 'Withdraw Address:',
                votingPower: 'Voting Power:',
                uptime: 'Uptime:',
                missedBlocks: 'Missed Blocks:',
                bondHeight: 'Bond Height:',
                unbondingHeight:'Unbonding Height:',
                consensusPubkey: 'Consensus Pubkey:',
                jailedUntil:'Jailed Until:'
            }
        },
        commissionInfo: {
            title: 'Commission Info',
            scatter: {
                title: 'Commission Rate & Bonded Tokens Distribution',
                xAxis: 'Commission Rate(%)',
                yAxis: 'Bonded_Token',
                tooltip: {
                    commissionRate: 'Commission Rate',
                    bondedTokens: 'Bonded Tokens',
                },
                otherValidator: 'Other Validator'
            },
            bondedAndCommissionArr: {
                commissionRate: 'Commission Rate:',
                bondedTokens: 'Bonded Tokens:',
                delegators: 'Delegators:',
                totalShares: 'Total Shares:',
                commissionRewards: 'Commission Rewards:',
                commissionRateRange: 'Commission Rate Range:',
                children: {
                    maxChangeRateEverytime: 'Max Change Rate Everytime:',
                    selfBonded: 'Self-Bonded:',
                    delegatorBonded:'Delegator Bonded:'
                }
            }
        },
        delegationsTitle: 'Delegations',
        unbondingDelegationsTitle: 'Unbonding Delegations',
        delegationsTxsTitle: 'Delegation Txs',
        validationTxsTitle: 'Validation Txs'
    },
    // 普通地址详情
    addressInformation: {
        tab:{
          assetInfo:'资产组成',
          nftCount:'数据对象',
          identity:'身份',
          iService:'服务',
          tx:'交易记录',
        },
        content: {
            address: 'Address',
            token: 'Token',
            totalAmount: 'Total Amount',
            balance: 'Balance',
            delegated: 'Delegated',
            unBonding: 'UnBonding',
            rewards: 'Rewards'
        },
        delegatorRewards: {
            title: 'Delegator Rewards',
            withdrawTo: 'Withdraw To'
        },
        validatorRewards: {
            title: 'Validator Rewards',
            validatorMoniker: 'Validator Moniker',
            operatorAddress:'Operator Address'
        }
    }
}
