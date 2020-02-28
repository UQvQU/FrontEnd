package com.thx.factory;

import java.util.List;

import com.thx.bean.ShoppingCart;

public interface ShoppingCartDao {

	// id用户添加商品到购物车
	public boolean addGoods(int uid, int gid, int number) throws Exception;

	// id用户删除购物车中的商品
	public boolean deleteGoods(int uid, int gid, int number) throws Exception;

	// id用户查询购物车所有商品
	public List<ShoppingCart> getAllGoods(int uid) throws Exception;

	// uid用户查询购物车中gid商品的数量
	public String getDesignateGoodsMs(int uid, int gid) throws Exception;

	// id用户支付购物车中gid商品
	public boolean payGoods(int uid, int gid, int number) throws Exception;

	// id用户支付购物车中所有商品
	public boolean payAllGoods(int uid) throws Exception;
}
