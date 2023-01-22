<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClickLog;

class Log extends Controller
{

    public function index(Request $request)
    {
        $date_today = date('Y-m-d');

        $logs = ClickLog::where('created_at', 'LIKE', "%$date_today%")->orderBy('created_at', 'DESC')->get('created_at');

        return response()->json((object) ['total_logs' => count($logs) ?? 0, 'latest_date' => count($logs) ? $logs->first()['created_at'] : $date_today], 200);
    }

    public function insert(Request $request)
    {
        $date_today = date('Y-m-d');

        $click = ClickLog::create(['created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')]);
        $logs = $click->where('created_at', 'LIKE', "%$date_today%")->orderBy('created_at', 'DESC')->get('created_at');

        return response()->json((object) ['total_logs' => count($logs), 'latest_date' => $logs->first()['created_at']], 200);
    }
}