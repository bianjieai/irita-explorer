<template>
	<div class="service_list_container_content">
		<div class="service_list_content_wrap">
			<div class="service_list_title">Services</div>
			<div class="service_list_content">
				<el-table :data="serviceList">
					<el-table-column label="TxHash">
						<template slot-scope="scope">
							<el-tooltip :content="scope.row.txHash"
							            effect="dark" placement="top">
								<router-link :to="`tx?txHash=${scope.row.txHash}`">{{formatTxHash(scope.row.txHash)}}</router-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Service Name">
						<template slot-scope="scope">
							<span>
								<router-link :to="`/service?serviceName=${scope.row.serviceName}&chainId=${scope.row.chainId}`">{{scope.row.serviceName}}</router-link>
							</span>
						</template>
					</el-table-column>
					<el-table-column label="Chain ID" prop="chainId"></el-table-column>
					<el-table-column label="Publisher" prop="publisher">
						<template slot-scope="scope">
							<el-tooltip placement="top"
							            effect="dark"
							            :content="scope.row.publisher">
								<router-link :to="`/address/${scope.row.publisher}`">{{formatAddress(scope.row.publisher)}}</router-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="From">
						<template slot-scope="scope">
							<el-tooltip placement="top"
							            effect="dark"
							            :content="scope.row.from">
								<router-link :to="`/address/${scope.row.from}`">{{formatAddress(scope.row.from)}}</router-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Description" prop="description"></el-table-column>
					<el-table-column label="Status" prop="status"></el-table-column>
				</el-table>
			</div>
			<div class="pagination_content">
				<m-pagination :page-size="pageSize"
				              :total="txCount"
				              :page="pageNum"
				              :page-change="pageChange">
					
				</m-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import Service from "../service"
	import Tools from "../util/Tools"
	import MPagination from "./MPagination";
	export default {
		name: "ServiceList",
		components: {MPagination},
		data() {
			return {
				pageNum: 1,
				pageSize: 20,
				serviceList:[],
				txCount:0,
			}
		},
		mounted () {
			this.getServiceList();
		},
		methods:{
			getServiceList(){
				Service.commonInterface({getServiceList:{
						pageNumber: this.pageNum,
						pageSize: this.pageSize
					}},(res) => {
					try {
						if(res){
							this.txCount = res.count;
							this.serviceList = res.data.map(item => {
								let msgServiceName,msgChainid,msgPublisher,msgDescription;
								if(item.msgs){
									item.msgs.forEach(item => {
										if(item.msg){
											msgServiceName = item.msg.name;
											msgChainid = item.msg.chain_id;
											msgPublisher = item.msg.author;
											msgDescription = item.msg.description
										}
									})
								}
								return {
									txHash: item.txHash,
									serviceName: msgServiceName,
									chainId: msgChainid,
									publisher: msgPublisher,
									from: item.from,
									description: msgDescription,
									status: Tools.firstWordUpperCase(item.status)
								}
							})
						}
					}catch (e) {
						console.error(e)
					}
				})
			},
			formatTxHash(TxHash){
				if(TxHash){
					return Tools.formatTxHash(TxHash)
				}
			},
			formatAddress(address){
				return Tools.formatValidatorAddress(address)
			},
			pageChange(pageNum) {
				this.pageNum = pageNum;
				this.getServiceList();
			}
		}
	}
</script>

<style scoped lang="scss">
	a{
		color: #3264FD !important;
	}
	.service_list_container_content{
		.service_list_content_wrap{
			max-width: 12rem;
			margin: 0 auto;
			.service_list_title{
				color: #22252A;
				font-size: 0.18rem;
				line-height: 0.21rem;
				font-weight: bold;
				text-indent: 0.2rem;
				margin: 0.3rem 0 0.1rem 0;
				text-align: left;
			}
		}
		.pagination_content{
			display: flex;
			justify-content: flex-end;
			margin: 0.1rem 0 0.2rem 0;
		}
	}
</style>
