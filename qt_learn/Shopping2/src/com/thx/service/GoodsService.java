package com.thx.service;

import java.sql.SQLException;
import java.util.List;

import com.thx.bean.Goods;
import com.thx.dao.GoodsDao;
import com.thx.db.DBConnection;
import com.thx.db.GoodsDaoImpl;

public class GoodsService implements GoodsDao{

	private DBConnection dbconn = null;

	private GoodsDao dao = null;
	
	public GoodsService() throws SQLException {
		this.dbconn = new DBConnection();
		this.dao = new GoodsDaoImpl(this.dbconn.getConnection());
	}
	
	@Override
	//增加商品
	public boolean addGoods(Goods goods) throws Exception {
		if (goods != null) {  // 如果goods不为空，执行增加操作
			return this.dao.addGoods(goods);
		}
		return false;
	}

	@Override
	//根据gid and types 查询商品并分页显示
	public List<Goods> getLatestGoods(int gid, String type) throws Exception {
		if (isInt(gid) & type != null) {
			return this.dao.getLatestGoods(gid, type);
		}
		return null;
	}

	@Override
	//获取所有的商品
	public List<Goods> getAllGoods() throws Exception {
		return this.dao.getAllGoods();
	}

	@Override
	//更新商品
	public boolean editInfo(Goods goods) throws Exception {
		if (goods != null) {
			return this.dao.editInfo(goods);
		}
		return false;
	}

	@Override
	//根据id删除商品
	public boolean deleteGoods(int gid) throws Exception {
		if (this.dao.queryById(gid) != null & isInt(gid)) {
			return this.dao.deleteGoods(gid);
		}
		return false;
	}

	@Override
	//根据gid查询商品信息
	public Goods queryById(int gid) throws Exception {
		if (isInt(gid)) {
			return this.dao.queryById(gid);
		}
		return null;
	}

	@Override
	//根据商品id获取该商品的数量
	public int queryNumberById(int gid) throws Exception {
		if (isInt(gid)) {
			return this.dao.queryNumberById(gid);
		}
		return 0;
	}

	@Override
	//查询商品中的所有种类
	public String[] queryTypes() throws Exception {
		return this.dao.queryTypes();
	}

	@Override
	//查询某种类的所有商品的id和name
	public List<Goods> getTypeGoodsList(String type) throws Exception {
		if (type != null) {
			return this.dao.getTypeGoodsList(type);
		}
		return null;
	}
	//将数字转换为字符串
	public boolean isInt(int index) {
		if (index == 0) {
			return false;
		}
		String str = String.valueOf(index);
		return str.matches("[0-9]+$");
	}

}
