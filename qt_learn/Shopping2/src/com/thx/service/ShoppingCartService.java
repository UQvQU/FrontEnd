package com.thx.service;

import java.sql.SQLException;
import java.util.List;

import com.thx.bean.ShoppingCart;
import com.thx.dao.ShoppingCartDao;
import com.thx.db.DBConnection;
import com.thx.db.ShoppingCartDaoImpl;

public class ShoppingCartService implements ShoppingCartDao{

	private DBConnection dbconn = null;

	private ShoppingCartDao dao = null;
	
	public ShoppingCartService() throws SQLException {
		this.dbconn = new DBConnection();
		this.dao = new ShoppingCartDaoImpl(this.dbconn.getConnection());
	}

	@Override
	//把商品加入购物车
	public boolean addGoods(int uid, int gid, int number) throws Exception {
		if (isInt(uid) && isInt(gid) && isInt(number)) {
			return this.dao.addGoods(uid, gid, number);
		}
		return false;
	}

	@Override
	//从购物车中删除商品
	public boolean deleteGoods(int uid, int gid, int number) throws Exception {
		if (isInt(uid) && isInt(gid) && isInt(number)) {
			return this.dao.deleteGoods(uid, gid, number);
		}
		return false;
	}

	@Override
	//获取购物车中所有的商品
	public List<ShoppingCart> getAllGoods(int uid) throws Exception {
		if (isInt(uid)) {
			return this.dao.getAllGoods(uid);
		}
		return null;
	}

	@Override
	//查询该用户购物车中是否已经含有该商品
	//如果有则返回购物车id和商品数量
	//否则返回空
	public String getDesignateGoodsMs(int uid, int gid) throws Exception {
		if (isInt(uid) && isInt(gid)) {
			return this.dao.getDesignateGoodsMs(uid, gid);
		}
		return "";
	}

	@Override
	//根据id and number支付该商品订单
	public boolean payGoods(int uid, int gid, int number) throws Exception {
		if (isInt(uid) && isInt(gid) && isInt(number)) {
			return this.dao.payGoods(uid, gid, number);
		}
		return false;
	}

	@Override
	//支付购物车中所有商品的订单
	public boolean payAllGoods(int uid) throws Exception {
		if (isInt(uid)) {
			return this.dao.payAllGoods(uid);
		}
		return false;
	}
	//加数字转换为字符串
	public boolean isInt(int index) {
		if (index == 0) {
			return false;
		}
		String str = String.valueOf(index);
		return str.matches("[0-9]+$");
	}
	
}
